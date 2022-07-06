import styled from '@emotion/styled';

const StyledLoginErrorMessage = styled.div`
  color: #f42b4b;
  text-align: center;
`;

const LoginErrorMessage = ({children}) => {
  return <StyledLoginErrorMessage>{children}</StyledLoginErrorMessage>;
};

export {LoginErrorMessage};
