import styled from '@emotion/styled';

const StyledHeadline = styled.h1`
  font-size: 3rem;
  line-height: 1;
  margin: 0 0 1000px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: 400;
  color: #333;
  text-transform: capitalize;
  text-align: center;
`;

const Headline = ({children, id}) => {
  return <StyledHeadline id={id}>{children}</StyledHeadline>;
};

export {Headline};
