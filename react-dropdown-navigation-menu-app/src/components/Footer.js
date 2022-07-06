import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>CowBoy Bebop</div>
    </StyledFooter>
  );
};

export { Footer };
