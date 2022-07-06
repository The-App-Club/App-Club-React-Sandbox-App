import styled from '@emotion/styled';

const StyledSongContainer = styled.div`
  margin-top: 100px;
  margin-left: 2%;
  margin-right: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    justify-content: space-around;
  }

  @media screen and (min-width: 1400px) {
    margin: auto;
    width: 1400px;
  }
`;

const SongContainer = ({children}) => {
  return <StyledSongContainer>{children}</StyledSongContainer>;
};

export {SongContainer};
