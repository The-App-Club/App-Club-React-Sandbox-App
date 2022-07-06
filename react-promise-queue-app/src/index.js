import styled from '@emotion/styled';
import React, { useState, Suspense, startTransition } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Pudding } from './components/Pudding';

import PQueue from 'p-queue/dist/index.js';
const concurrency = 4;
const queue = new PQueue({ concurrency });
queue.on('error', (error) => {
  console.log('[error]', error, queue.size);
});

queue.on('active', () => {
  console.log('[active]', queue.size, queue.pending);
});

queue.on('completed', (result) => {
  console.log('[completed]', result, queue.size);
});

function App() {
  const [jobCount, setJobCount] = useState(113);
  const [jobQueue, setJobQueue] = useState(queue);

  return <Pudding queue={queue} jobCount={jobCount} setJobCount={setJobCount} jobQueue={jobQueue} setJobQueue={setJobQueue} concurrency={concurrency}></Pudding>;
}

// react 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
