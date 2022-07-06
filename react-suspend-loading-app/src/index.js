import React, { useState, Suspense, startTransition } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';
import { Sleep1s } from './components/Sleep1s';
import { DataLoader1, DataLoader2 } from './components/DataLoader';

const Loading = () => {
  return <p>Loading...</p>;
};

function App() {
  const [sleepIsShown, setSleepIsShown] = useState(false);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>

      <Suspense fallback={<Loading></Loading>}>
        <DataLoader1 />
      </Suspense>

      <Suspense fallback={<Loading></Loading>}>
        <DataLoader2 />
      </Suspense>
      {/* <Suspense fallback={<Loading></Loading>}>
        <Sleep1s />
        {sleepIsShown ? <Sleep1s /> : null}
      </Suspense> */}
      {/* <p>
        <button
          className="border p-1"
          onClick={() => {
            startTransition(() => {
              setSleepIsShown(true);
            });
          }}
        >
          Show Sleep1s
        </button>
      </p> */}
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
