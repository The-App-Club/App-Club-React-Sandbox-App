import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import styled from '@emotion/styled';

import { Button } from './components/Button';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <StyledContainer>
        <Button resultStatus={0}></Button>
        <Button resultStatus={1}></Button>
      </StyledContainer>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
