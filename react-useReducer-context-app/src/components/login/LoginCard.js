import styled from '@emotion/styled';

const StyledLoginCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 70%;
  width: 45%;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 700px) {
    width: 80%;
    align-self: center;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

const LoginCard = ({children}) => {
  return <StyledLoginCard>{children}</StyledLoginCard>;
};

export {LoginCard};
