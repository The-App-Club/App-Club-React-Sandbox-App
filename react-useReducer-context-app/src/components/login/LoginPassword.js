import styled from '@emotion/styled';

const StyledLoginPasswordLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
const StyledLoginPasswordInput = styled.input`
  padding-left: 1px;
  padding-right: 1px;
  height: 40px;
  border-radius: 5px;
  border: 0.5px solid rgb(143, 143, 143);
  font-size: 15px;
`;

const LoginPassword = ({children, password, handleChange}) => {
  return (
    <StyledLoginPasswordLabel htmlFor="password">
      Password
      <StyledLoginPasswordInput
        type="text"
        value={password}
        onChange={handleChange}
        name="password"
        id="password"
      />
    </StyledLoginPasswordLabel>
  );
};

export {LoginPassword};
