import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section } from './components/Section';
import { Paragraph } from './components/Paragraph';
import { Footer } from './components/Footer';
import { useEffect, useState, useRef } from 'react';
import { Post } from './components/Post';
import { Posts } from './components/Posts';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [postId, setPostId] = useState(-1);
  return (
    <>
      <Header>CowBoy Bebop</Header>

      <QueryClientProvider client={queryClient}>
        <p>
          As you visit the posts below, you will notice them in a loading state
          the first time you load them. However, after you return to this list
          and click on any posts you have already visited again, you will see
          them load instantly and background refresh right before your eyes!{' '}
          <strong>
            (You may need to throttle your network speed to simulate longer
            loading sequences)
          </strong>
        </p>
        {postId > -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} />
        )}
      </QueryClientProvider>
      <Main>
        <Section>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Section>
        <Section>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Section>
      </Main>
      <Footer></Footer>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
