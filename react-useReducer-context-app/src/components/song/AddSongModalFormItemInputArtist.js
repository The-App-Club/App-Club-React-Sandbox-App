import styled from '@emotion/styled';

const StyledAddSongModalFormItemInputArtist = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

const StyledAddSongModalFormItemInputArtistLabel = styled.label``;

const StyledAddSongModalFormItemInputArtistInput = styled.input``;

const AddSongModalFormItemInputArtist = ({children, artist, setArtist}) => {
  return (
    <StyledAddSongModalFormItemInputArtist>
      <StyledAddSongModalFormItemInputArtistLabel htmlFor="artist">
        artist
      </StyledAddSongModalFormItemInputArtistLabel>
      <StyledAddSongModalFormItemInputArtistInput
        id="artist"
        name="artist"
        type="text"
        value={artist}
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
    </StyledAddSongModalFormItemInputArtist>
  );
};

export {AddSongModalFormItemInputArtist};
