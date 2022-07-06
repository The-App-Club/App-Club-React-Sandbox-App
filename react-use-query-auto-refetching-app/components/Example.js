import axios from 'axios';
import { useState } from 'react';

import ItemList from './ItemList';
import Form from './Form';
import QueryInterval from './QueryInterval';
import ClearButton from './ClearButton';
import Container from './Container';
import Header from './Header';
import SubHeader from './SubHeader';

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

function Example() {
  const queryClient = useQueryClient();
  const [intervalMs, setIntervalMs] = useState(1000);
  const [value, setValue] = useState('');

  const { status, data, error, isFetching } = useQuery(
    'todos',
    async () => {
      const res = await axios.get('/api/data');
      return res.data;
    },
    {
      // Refetch the data every second
      refetchInterval: intervalMs,
    }
  );

  const addMutation = useMutation((value) => fetch(`/api/data?add=${value}`), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });

  const clearMutation = useMutation(() => fetch(`/api/data?clear=1`), {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') return <span>Error: {error.message}</span>;

  return (
    <Container>
      <Header interval={intervalMs}></Header>

      <QueryInterval
        intervalMs={intervalMs}
        isFetching={isFetching}
        setIntervalMs={setIntervalMs}
      ></QueryInterval>

      <SubHeader></SubHeader>

      <Form setValue={setValue} addMutation={addMutation} value={value}></Form>

      <ItemList data={data}></ItemList>

      <ClearButton clearMutation={clearMutation}></ClearButton>
    </Container>
  );
}

export default Example;
