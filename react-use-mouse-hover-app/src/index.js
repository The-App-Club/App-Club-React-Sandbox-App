import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';

import { useMouseHover } from './hooks/useMouseHover';
import { Pudding } from './components/Pudding';

// https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient()
// https://cssgradient.io/
const Workspace = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const puddingRef = useRef(null);
  const [message, setMessage] = useState('Pudding');
  useMouseHover(puddingRef, 4000, (e) => {
    console.log(e);
    setMessage(e.message);
  });

  const handleMouseLeave = (e) => {
    setMessage('Pudding');
  };

  return (
    <Workspace>
      <Pudding ref={puddingRef} handleMouseLeave={handleMouseLeave}>
        {message}
      </Pudding>
    </Workspace>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
