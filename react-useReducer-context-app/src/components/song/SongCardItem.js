import styled from '@emotion/styled';

const StyledSongCardItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 400px;
  width: 30%;
  position: relative;
  margin-bottom: 2%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 780px) {
    width: 45%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const SongCardItemThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledSongCardItemContent = styled.div`
  bottom: 0;
  z-index: 9;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 35%;
  padding-bottom: 5px;
  transition: 0.5s;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    height: 50%;
    cursor: pointer;
  }
`;

const StyledSongCardItemContentHeader = styled.h2`
  text-align: center;
  font-size: 2rem;
`;
const StyledSongCardItemContentArtist = styled.span``;

const SongCardItem = ({song}) => {
  return (
    <StyledSongCardItem>
      <SongCardItemThumbnailImage src={song.albumArt} alt="" />
      <StyledSongCardItemContent>
        <StyledSongCardItemContentHeader>
          {song.name}
        </StyledSongCardItemContentHeader>
        <StyledSongCardItemContentArtist>
          BY: {song.artist}
        </StyledSongCardItemContentArtist>
      </StyledSongCardItemContent>
    </StyledSongCardItem>
  );
};

export {SongCardItem};
