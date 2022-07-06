import React from 'react';
import {useAuthDispatch, logout, useAuthState} from '../../context';
import styled from '@emotion/styled';
const StyledDashBoardPage = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledDashBoardContainer = styled.div`
  padding: 10px;
`;

const StyledDashBoardContent = styled.div``;

const StyledDashBoardContentHeader = styled.h1``;

const StyledLogoutButton = styled.button``;

const StyledWelcomeMessage = styled.p``;

function Dashboard(props) {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    props.history.push('/login');
  };
  return (
    <StyledDashBoardPage>
      <StyledDashBoardContainer>
        <StyledDashBoardContent>
          <StyledDashBoardContentHeader>Dashboard</StyledDashBoardContentHeader>
          <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
          <StyledWelcomeMessage>
            Welcome {userDetails.user.email}
            {JSON.stringify(userDetails)}
          </StyledWelcomeMessage>
        </StyledDashBoardContent>
      </StyledDashBoardContainer>
    </StyledDashBoardPage>
  );
}

export default Dashboard;
