import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';
import { Pudding } from './components/Pudding';
import { useRequestAnimationFrame } from './hooks/useRequestAnimationFrame';
import { usePrevious } from './hooks/usePrevious';
// https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient()
// https://cssgradient.io/
const Workspace = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

let startTime, endTime, myReq;

function App() {
  const [value, setValue] = useState(0);
  const lastValue = usePrevious(value);

  const [isHover, setIsHover] = useState(false);
  const [message, setMessage] = useState('Pudding');

  function marquee({ isHover }, callback) {
    const now = new Date();
    if (!isHover) {
      cancelAnimationFrame(myReq);
    } else {
      myReq = requestAnimationFrame(() => {
        marquee({ isHover }, callback);
      });
    }
    callback(now);
  }

  function start() {
    startTime = performance.now();
  }

  function end() {
    endTime = performance.now();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    const seconds = Math.round(timeDiff);
    console.log(seconds + ' seconds elapsed');
  }

  useEffect(() => {
    // console.log(isHover)
    marquee({ isHover }, (e) => {
      // console.log(e);
      if (startTime && isHover) {
        console.log('[logger]', isHover, performance.now() - startTime);
        if (performance.now() - startTime > 3000) {
          setMessage('Still Hover');
        }
      }
    });
  }, [isHover]);

  const handleMouseEnter = (e) => {
    setIsHover(true);
    start();
  };

  const handleMouseLeave = (e) => {
    setIsHover(false);
    end();
    setMessage('Pudding');
  };
  return (
    <Workspace>
      <Pudding message={message} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}></Pudding>
    </Workspace>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
