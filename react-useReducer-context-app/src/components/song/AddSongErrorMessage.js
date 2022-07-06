import styled from '@emotion/styled';

const StyledAddSongErrorMessage = styled.p``;

const AddSongErrorMessage = ({songHasError}) => {
  if (songHasError) {
    return (
      <StyledAddSongErrorMessage>
        {'Error Creating Song!'}
      </StyledAddSongErrorMessage>
    );
  }
  return null;
};

export {AddSongErrorMessage};
