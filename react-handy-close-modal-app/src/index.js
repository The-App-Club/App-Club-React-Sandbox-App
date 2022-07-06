import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';
import { Modal } from './components/Modal';

import { useFocusTrap } from './hooks/useFocusTrap';
import { useClickOutside } from './hooks/useClickOutside';

const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledController = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
`;

const StyledButton = styled.button`
  display: block;
`;

function App() {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e) => {
    setIsOpen(false);
  };
  const handleOpen = (e) => {
    setIsOpen(true);
  };

  useClickOutside(modalRef, (e) => {
    console.log('hoge', e);
    if (e.clickedDom.closest('button')) {
      return;
    }
    setIsOpen(false);
  });
  return (
    <StyledContainer>
      <Modal ref={modalRef} isOpen={isOpen}></Modal>
      <StyledController>
        <StyledButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Toggle
        </StyledButton>
        <StyledButton onClick={handleOpen}>Open</StyledButton>
        <StyledButton onClick={handleClose}>Close</StyledButton>
      </StyledController>
    </StyledContainer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
