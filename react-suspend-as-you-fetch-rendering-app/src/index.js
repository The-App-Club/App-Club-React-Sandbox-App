import React, { useState, Suspense, startTransition } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';
import { Sleep1s } from './components/Sleep1s';
import { DataLoader, DataLoader1, DataLoader2 } from './components/DataLoader';
import { Loadable } from './components/Loadable';

import { fetchData1 } from './plugins/fetch';

const Loading = () => {
  return <p>Loading...</p>;
};

function App() {
  const [data1] = useState(() => new Loadable(fetchData1()));
  const [data2] = useState(() => new Loadable(fetchData1()));
  const [data3] = useState(() => new Loadable(fetchData1()));

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<Loading></Loading>}>
        <DataLoader data={data1} />
      </Suspense>
      <Suspense fallback={<Loading></Loading>}>
        <DataLoader data={data2} />
      </Suspense>
      <Suspense fallback={<Loading></Loading>}>
        <DataLoader data={data3} />
      </Suspense>
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
