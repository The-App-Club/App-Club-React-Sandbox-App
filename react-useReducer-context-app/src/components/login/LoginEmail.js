import styled from '@emotion/styled';

const StyledLoginEmailLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
const StyledLoginEmailInput = styled.input`
  padding-left: 1px;
  padding-right: 1px;
  height: 40px;
  border-radius: 5px;
  border: 0.5px solid rgb(143, 143, 143);
  font-size: 15px;
`;

const LoginEmail = ({children, email, handleChange}) => {
  return (
    <StyledLoginEmailLabel htmlFor="email">
      Email
      <StyledLoginEmailInput
        type="text"
        value={email}
        onChange={handleChange}
        name="email"
        id="email"
      />
    </StyledLoginEmailLabel>
  );
};

export {LoginEmail};
