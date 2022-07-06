import styled from '@emotion/styled';

const StyledAddSongModalContainer = styled.div`
  margin: 0 auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 400px;
`;

const AddSongModalContainer = ({children}) => {
  return <StyledAddSongModalContainer>{children}</StyledAddSongModalContainer>;
};

export {AddSongModalContainer};
