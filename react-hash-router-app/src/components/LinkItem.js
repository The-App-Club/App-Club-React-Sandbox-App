import styled from '@emotion/styled';

const StyledLinkItem = styled.li`
  display: inline-block;
  margin: 0 20px;

  & a {
    text-decoration: none;
  }
`;

const LinkItem = ({children}) => {
  return <StyledLinkItem>{children}</StyledLinkItem>;
};

export {LinkItem};
