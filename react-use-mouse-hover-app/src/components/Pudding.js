import { forwardRef } from 'react';
import styled from '@emotion/styled';

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
const StyledPudding = styled.div`
  border: 3px solid skyblue;
`;
const _Pudding = ({ children, handleMouseLeave }, ref) => {
  return (
    <StyledPudding ref={ref} onMouseLeave={handleMouseLeave}>
      {children}
    </StyledPudding>
  );
};

const Pudding = forwardRef(_Pudding);

export { Pudding };
