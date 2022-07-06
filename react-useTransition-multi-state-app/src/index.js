import styled from '@emotion/styled';
import React, { useState, Suspense, useTransition } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { useTime } from './hooks/useTime';
import { Loading } from './components/Loading';
import { ShowData } from './components/ShowData';

const CoolPending = styled.p`
  color: burlywood;
  font-weight: 800;
`;

const CoolPending2 = styled.p`
  color: palegreen;
  font-weight: 800;
`;

const renderPending = ({ isPending, isPending2, time }) => {
  if (isPending) {
    return <CoolPending>🕒 {time}</CoolPending>;
  }
  if (isPending2) {
    return <CoolPending2>🕒 {time}</CoolPending2>;
  }
  return <p>🕒 {time}</p>;
};

function App() {
  const [counter, setCounter] = useState(0);
  const time = useTime();
  // https://stackoverflow.com/questions/62499356/usetransition-mounts-new-object-instantly
  const [isPending, startTransition] = useTransition();
  const [isPending2, startTransition2] = useTransition();

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      {renderPending({ isPending, time })}
      {renderPending({ isPending2, time })}

      <Suspense fallback={<p>Loading...</p>}>
        <ShowData dataKey={counter} />
      </Suspense>
      <p>
        <button
          className="border p-1"
          onClick={() => {
            // ここのブロックは同期する サービスワーカーみたい
            startTransition(() => {
              setCounter((c) => {
                return c + 1;
              });
            });
            startTransition2(() => {
              setCounter((c) => {
                return c + 5;
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
