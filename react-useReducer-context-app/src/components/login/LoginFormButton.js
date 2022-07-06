import styled from '@emotion/styled';

const StyledLoginFormButton = styled.button`
  display: inline-block;
  font-family: 'Open Sans Semibold', sans-serif;
  white-space: nowrap;
  padding: 7px 10px;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  transition: background 0.4s ease;
  font-size: 14px;
  height: 40px;
  font-weight: bold;
  background-color: #f42b4b;
  color: rgb(255, 255, 255);
  &:hover {
    background-color: rgb(151, 25, 46);
    cursor: pointer;
  }

  &:focus {
    outline: none !important;
  }
  &:disabled {
    color: white;
    border-color: gray;
    background-color: gray;
  }
`;

const StyledLoginLoadingImage = styled.img`
  animation: spinner infinite 0.9s linear;
  height: 90%;
  &:focus {
    border: none;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const renderLoginIcon = ({isSubmitting}) => {
  console.log('isSubmitting', isSubmitting);
  if (isSubmitting) {
    return (
      <StyledLoginLoadingImage src={'../assets/logo.svg'} alt="loading icon" />
    );
  }
  return `Login`;
};

const LoginFormButton = ({children, isSubmitting}) => {
  return (
    <StyledLoginFormButton disabled={isSubmitting}>
      {renderLoginIcon({isSubmitting})}
    </StyledLoginFormButton>
  );
};

export {LoginFormButton};
