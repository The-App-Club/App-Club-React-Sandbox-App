import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
const StyledPudding = styled.div`
  border: 3px solid skyblue;
`;
const Pudding = ({ children, message, handleMouseEnter, handleMouseLeave }) => {
  console.log('Pudding');
  return (
    <StyledPudding onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {message}
    </StyledPudding>
  );
};

export { Pudding };
