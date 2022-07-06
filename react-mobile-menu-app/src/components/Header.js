import styled from '@emotion/styled';
import { useEffect } from 'react';
import { MobileMenu } from './MobileMenu';
import { useToggleState } from '../hooks/useToggleState';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

function Header({ children }) {
  const mobileMenuState = useToggleState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 519) {
        mobileMenuState.handleOff();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuState]);

  return (
    <StyledHeader>
      {children}
      <MobileMenu {...mobileMenuState}></MobileMenu>
    </StyledHeader>
  );
}

export { Header };
