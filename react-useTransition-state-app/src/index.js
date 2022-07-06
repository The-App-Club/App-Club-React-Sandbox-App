import styled from '@emotion/styled';
import React, { useState, Suspense, startTransition } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { useTime } from './hooks/useTime';
import { Loading } from './components/Loading';
import { ShowData } from './components/ShowData';

function App() {
  const [counter, setCounter] = useState(0);
  const time = useTime();
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <p className="tabular-nums">🕒 {time}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <ShowData dataKey={counter} />
      </Suspense>
      <p>
        <button
          className="border p-1"
          onClick={() => {
            startTransition(() => {
              setCounter((c) => {
                // https://zenn.dev/uhyo/books/react-concurrent-handson-2/viewer/state-updates#%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E6%9B%B4%E6%96%B0%E3%81%A8%E9%96%A2%E6%95%B0%E3%81%AE%E7%B4%94%E7%B2%8B%E6%80%A7
                // const next = c + 1 + Math.floor(Math.random() * 10);
                // console.log(c, "→", next);
                // return next;
                return c + 1;
              });
            });
          }}
        >
          Counter is {counter}
        </button>
      </p>
    </div>
  );
}
// react 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
