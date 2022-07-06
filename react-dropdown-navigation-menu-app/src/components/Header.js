import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>CowBoy Bebop</div>
    </StyledHeader>
  );
};

export { Header };
