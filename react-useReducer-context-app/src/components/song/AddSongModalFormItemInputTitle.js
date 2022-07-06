import styled from '@emotion/styled';

const StyledAddSongModalFormItemInputTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

const StyledAddSongModalFormItemInputTitleLabel = styled.label``;

const StyledAddSongModalFormItemInputTitleInput = styled.input``;

const AddSongModalFormItemInputTitle = ({children, title, setTitle}) => {
  return (
    <StyledAddSongModalFormItemInputTitle>
      <StyledAddSongModalFormItemInputTitleLabel htmlFor="title">
        Title
      </StyledAddSongModalFormItemInputTitleLabel>
      <StyledAddSongModalFormItemInputTitleInput
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </StyledAddSongModalFormItemInputTitle>
  );
};

export {AddSongModalFormItemInputTitle};
