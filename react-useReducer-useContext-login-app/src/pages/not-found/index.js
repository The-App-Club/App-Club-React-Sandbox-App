import React from 'react';
import styled from '@emotion/styled';
const StyledNotFoundContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function NotFound(props) {
  return (
    <StyledNotFoundContainer>
      <h1>Page not found</h1>
    </StyledNotFoundContainer>
  );
}

export default NotFound;
