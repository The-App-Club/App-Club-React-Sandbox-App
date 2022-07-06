import styled from '@emotion/styled';
import { forwardRef } from 'react';

const StyledOverlay = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 600px;
  background: darksalmon;
`;

// https://github.com/dqn/hook-modal/blob/main/example/src/Modal/Modal.tsx#L1
const _Modal = ({ isOpen }, ref) => {
  if (isOpen) {
    return (
      <StyledOverlay>
        <StyledModal ref={ref}>
          <h2>This is Modal</h2>
        </StyledModal>
      </StyledOverlay>
    );
  } else {
    return null;
  }
};

const Modal = forwardRef(_Modal);

export { Modal };
