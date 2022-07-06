import styled from '@emotion/styled';

const StyledAddSongModalFormItemList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10vw;
`;

const AddSongModalFormItemList = ({children}) => {
  return (
    <StyledAddSongModalFormItemList>{children}</StyledAddSongModalFormItemList>
  );
};

export {AddSongModalFormItemList};
