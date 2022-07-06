import styled from '@emotion/styled';

const StyledAddSongModal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.4s ease, visibility 0.4s ease;
`;

const AddSongModal = ({children}) => {
  return <StyledAddSongModal>{children}</StyledAddSongModal>;
};

export {AddSongModal};
