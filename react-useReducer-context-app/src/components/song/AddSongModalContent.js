import styled from '@emotion/styled';

const StyledAddSongModalContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AddSongModalContent = ({children}) => {
  return <StyledAddSongModalContent>{children}</StyledAddSongModalContent>;
};

export {AddSongModalContent};
