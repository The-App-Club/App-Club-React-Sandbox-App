import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';

import { TimeRender } from './components/TimeRender';

// https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient()
// https://cssgradient.io/
const Workspace = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Workspace>
      <TimeRender></TimeRender>
    </Workspace>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
