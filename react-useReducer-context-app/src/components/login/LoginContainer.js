import styled from '@emotion/styled';

const StyledLoginContainer = styled.div`
  display: flex;
  align-items: center;
  background-image: url('./assets/carry-on-colour.svg');
  height: calc(100vh - 70px);
  background-repeat: no-repeat;
  background-position: right;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 70px;
  @media screen and (max-width: 700px) {
    justify-content: center;
    background-image: none;
  }
`;

const LoginContainer = ({children}) => {
  return <StyledLoginContainer>{children}</StyledLoginContainer>;
};

export {LoginContainer};
