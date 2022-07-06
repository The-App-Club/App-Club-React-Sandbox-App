import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';
import { useTransition, a } from 'react-spring';

const StyledButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
`;

function App() {
  const [initial, setInitial] = useState(true);
  const transition = useTransition(initial, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <div>
        {transition((style, initial) => {
          return initial ? <a.h1 style={style}>Hello Initial</a.h1> : <a.h1 style={style}>Hello Secondary</a.h1>;
        })}
      </div>
      <StyledButton onClick={() => setInitial((prev) => !prev)}>Change Page</StyledButton>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
