import styled from '@emotion/styled';

const StyledLoginFormHeader = styled.h1`
  font-size: 2.5rem;
`;

const LoginFormHeader = ({children}) => {
  return <StyledLoginFormHeader>{children}</StyledLoginFormHeader>;
};

export {LoginFormHeader};
