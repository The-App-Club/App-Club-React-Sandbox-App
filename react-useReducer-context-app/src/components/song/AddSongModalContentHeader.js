import styled from '@emotion/styled';

const StyledAddSongModalContentHeader = styled.h1``;

const AddSongModalContentHeader = ({children}) => {
  return (
    <StyledAddSongModalContentHeader>
      {'ADD NEW SONG'}
    </StyledAddSongModalContentHeader>
  );
};

export {AddSongModalContentHeader};
