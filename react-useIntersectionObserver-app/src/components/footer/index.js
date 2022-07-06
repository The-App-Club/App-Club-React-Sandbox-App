import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children }) => {
  return <StyledFooter>{'@copyright CowBoy Bebop'}</StyledFooter>;
};

export default Footer;
