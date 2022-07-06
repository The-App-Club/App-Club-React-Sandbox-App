import React from 'react';
import Link from 'next/link';
import axios from 'axios';

import Divider from '../components/Divider';
import CoolLink from '../components/CoolLink';
import Header from '../components/Header';
import Container from '../components/Container';
import StatusMessage from '../components/StatusMessage';
import LoadMoreNew from '../components/LoadMoreNew';
import LoadMoreOld from '../components/LoadMoreOld';
import CardItemList from '../components/CardItemList';

import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    'projects',
    async ({ pageParam = 0 }) => {
      const res = await axios.get('/api/projects?cursor=' + pageParam);
      return res.data;
    },
    {
      getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
      getNextPageParam: (lastPage) => lastPage.nextId ?? false,
    }
  );

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });
  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') return <span>Error: {error.message}</span>;
  return (
    <Container>
      <Header></Header>
      <LoadMoreOld
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        isFetchingNextPage={isFetchingNextPage}
        isFetchingPreviousPage={isFetchingPreviousPage}
        fetchPreviousPage={fetchPreviousPage}
      ></LoadMoreOld>
      <CardItemList data={data}></CardItemList>
      <LoadMoreNew
        loadMoreButtonRef={loadMoreButtonRef}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      ></LoadMoreNew>
      <StatusMessage></StatusMessage>
      <StatusMessage
        isFetching={isFetching}
        isFetchingNextPage={isFetchingNextPage}
      ></StatusMessage>

      <Divider />
      <CoolLink></CoolLink>
    </Container>
  );
}
