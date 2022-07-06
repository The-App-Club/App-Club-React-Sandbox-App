import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Child } from './components/Child';
import { ChildMemo } from './components/ChildMemo';
import { ChildMemoHighCost } from './components/ChildMemoHighCost';
import { ChildCallback } from './components/ChildCallback';
import { ChildMemoCallback } from './components/ChildMemoCallback';

const App = () => {
  console.log('render App');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [timeLeft, setTimeLeft] = useState(100);
  const timerRef = useRef(null);
  const timeLeftRef = useRef(timeLeft);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  const tick = () => {
    if (timeLeftRef.current === 0) {
      clearInterval(timerRef.current);
      return;
    }
    setTimeLeft((prevTime) => prevTime - 1);
  };

  const start = () => {
    timerRef.current = setInterval(tick, 10);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTimeLeft(100);
  };

  const handleClick = () => {
    console.log('click, handleClick');
  };

  const handleClickCallback = useCallback(() => {
    console.log('click, handleClickCallback');
  }, []);

  return (
    <>
      <button
        onClick={() => {
          start();
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount1((count1) => {
            return count1 + 1;
          });
        }}
      >
        countup App count
      </button>
      <button
        onClick={() => {
          setCount2((count2) => {
            return count2 + 1;
          });
        }}
      >
        countup Child count
      </button>
      <p>App: {timeLeft}</p>
      <p>App: {count1}</p>
      <Child count={count2} />
      <ChildMemo count={count2} />
      <ChildMemoHighCost count={count2} />
      <ChildCallback handleClick={handleClick} />
      <ChildMemoCallback handleClick={handleClickCallback} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
