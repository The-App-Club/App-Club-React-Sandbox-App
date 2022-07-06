import styled from '@emotion/styled';

const StyledAddSongModalController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddSongModalController = ({children}) => {
  return (
    <StyledAddSongModalController>{children}</StyledAddSongModalController>
  );
};

export {AddSongModalController};
