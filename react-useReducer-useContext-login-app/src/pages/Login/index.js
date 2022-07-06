import React, {useState} from 'react';
import {loginUser, useAuthState, useAuthDispatch} from '../../context';
import styled from '@emotion/styled';

const StyledLoginPage = styled.div`
  width: 100%;
`;

const StyledLoginContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoginContent = styled.div`
  width: 200px;
`;

const StyledLoginContentHeader = styled.h1``;

const StyledErrorMessage = styled.p`
  font-size: 0.8rem;
  color: #bb0000;
`;

const StyledLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLoginFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StyledLoginButton = styled.button``;

const StyledEmailLabel = styled.label``;
const StyledEmailInput = styled.input``;

const StyledPasswordLabel = styled.label``;
const StyledPasswordInput = styled.input``;

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAuthDispatch();
  const {user, loading, errorMessage} = useAuthState();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, {email, password});

      if (!response.user) {
        return;
      }

      props.history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const renderErrorMessage = ({errorMessage}) => {
    if (errorMessage) {
      return <StyledErrorMessage>{errorMessage}</StyledErrorMessage>;
    }
    return null;
  };

  return (
    <StyledLoginPage>
      <StyledLoginContainer>
        <StyledLoginContent>
          <StyledLoginContentHeader>Login Page</StyledLoginContentHeader>
          {JSON.stringify(user)}
          {JSON.stringify(loading)}
          {JSON.stringify(errorMessage)}
          {/* {renderErrorMessage({errorMessage})} */}
          <StyledLoginForm>
            <StyledLoginFormItem>
              <StyledEmailLabel htmlFor="email">Email</StyledEmailLabel>
              <StyledEmailInput
                type="text"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled={loading}
              />
            </StyledLoginFormItem>
            <StyledLoginFormItem>
              <StyledPasswordLabel htmlFor="password">
                Password
              </StyledPasswordLabel>
              <StyledPasswordInput
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                disabled={loading}
              />
            </StyledLoginFormItem>
            <StyledLoginButton onClick={handleLogin} disabled={loading}>
              login
            </StyledLoginButton>
          </StyledLoginForm>
        </StyledLoginContent>
      </StyledLoginContainer>
    </StyledLoginPage>
  );
}

export default Login;
