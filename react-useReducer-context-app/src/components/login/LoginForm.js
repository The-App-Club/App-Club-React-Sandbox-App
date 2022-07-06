import styled from '@emotion/styled';

const StyledLoginForm = styled.form`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
`;

const LoginForm = ({children, handleSubmit}) => {
  return <StyledLoginForm onSubmit={handleSubmit}>{children}</StyledLoginForm>;
};

export {LoginForm};
