import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';
import { Suspense } from 'react';

import { SometimesSuspend } from './components/SometimesSuspend ';
import { RenderingNotifier } from './components/RenderingNotifier';

const Loading = () => {
  return <p>Loading...</p>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense" />
      <Suspense fallback={<Loading></Loading>}>
        <SometimesSuspend>
          <RenderingNotifier name="inside-Suspense" />
          <div>
            <button
              className="border p-1"
              onClick={() => {
                setCount((c) => c + 1);
              }}
            >
              {count}
            </button>
          </div>
        </SometimesSuspend>
      </Suspense>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
