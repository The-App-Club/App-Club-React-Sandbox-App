import styled from '@emotion/styled';

const StyledLoginContent = styled.div`
  padding-left: 7%;
  padding-right: 7%;
  height: 100%;
`;

const LoginContent = ({children}) => {
  return <StyledLoginContent>{children}</StyledLoginContent>;
};

export {LoginContent};
