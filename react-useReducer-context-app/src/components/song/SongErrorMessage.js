import styled from '@emotion/styled';

const StyledSongErrorMessage = styled.span`
  width: 100%;
  align-self: center;
  color: #f42b4b;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const SongErrorMessage = ({hasError}) => {
  if (hasError) {
    return (
      <StyledSongErrorMessage>{'AN ERROR HAS OCCURED'}</StyledSongErrorMessage>
    );
  }
  return null;
};

export {SongErrorMessage};
