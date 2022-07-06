import styled from '@emotion/styled';
import React, { useState, Suspense, startTransition } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { ShowData } from './components/ShowData';

const Loading = () => {
  return <p>Loading...</p>;
};

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<Loading></Loading>}>
        <ShowData dataKey={counter} />
      </Suspense>
      <p>
        <button
          className="border p-1"
          onClick={() => {
            // setCounter(counter + 1);

            // こちらは初回のみローディングがでる
            startTransition(() => {
              // setCounter(counter + 1);
              setCounter((counter)=>{return counter + 1});
            });
          }}
        >
          Counter is {counter}
        </button>
      </p>
    </div>
  );
}

// react 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// react 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
