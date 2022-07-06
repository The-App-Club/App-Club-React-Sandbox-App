import styled from '@emotion/styled';

const StyledLinkItemList = styled.ul`
  text-align: center;
  margin: 0 0 800px 0;
  padding: 20px 0 0 0;

  & li {
    display: inline-block;
    margin: 0 20px;
  }

  & a {
    text-decoration: none;
  }
`;

const LinkItemList = ({children}) => {
  return <StyledLinkItemList>{children}</StyledLinkItemList>;
};

export {LinkItemList};
