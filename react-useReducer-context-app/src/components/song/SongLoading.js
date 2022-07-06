import styled from '@emotion/styled';

const StyledSongLoading = styled.span`
  align-self: center;
  width: 100%;
  text-align: center;
`;

const SongLoading = ({isFetching}) => {
  if (isFetching) {
    return <StyledSongLoading>{'LOADING...'}</StyledSongLoading>;
  }
  return null;
};

export {SongLoading};
