import styled from '@emotion/styled';

const StyledContainer = styled.div`
  height: 100%;
`;

const Container = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export {Container};
