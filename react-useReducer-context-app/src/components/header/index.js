import {useContext} from 'react';
import {AuthContext} from '../../context/auth';
import styled from '@emotion/styled';

const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f42b4b;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 70px;
  top: 0;
  padding-right: 5px;
  padding-left: 5px;
`;

const StyledNavHeader = styled.h1`
  color: white;
`;

const StyledNavButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none !important;
  }
`;

export const Header = () => {
  const {state, dispatch} = useContext(AuthContext);

  const renderLoginedUser = ({isAuthenticated, user}) => {
    if (isAuthenticated && user) {
      return <h1>Hi, {user.firstName} Logout</h1>;
    }
    return null;
  };

  return (
    <StyledNav>
      <StyledNavHeader>HOOKED</StyledNavHeader>
      <StyledNavButton
        onClick={() =>
          dispatch({
            type: 'LOGOUT',
          })
        }
      >
        {renderLoginedUser({
          isAuthenticated: state.isAuthenticated,
          user: state.user,
        })}
      </StyledNavButton>
    </StyledNav>
  );
};

export default Header;
