import styled from '@emotion/styled';

const StyledAddSongModalFormItemInputImageURL = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

const StyledAddSongModalFormItemInputImageURLLabel = styled.label``;

const StyledAddSongModalFormItemInputImageURLInput = styled.input``;

const AddSongModalFormItemInputImageURL = ({
  children,
  imageURL,
  setImageUrl,
}) => {
  return (
    <StyledAddSongModalFormItemInputImageURL>
      <StyledAddSongModalFormItemInputImageURLLabel htmlFor="imageURL">
        imageURL
      </StyledAddSongModalFormItemInputImageURLLabel>
      <StyledAddSongModalFormItemInputImageURLInput
        id="imageURL"
        name="imageURL"
        type="text"
        value={imageURL}
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
    </StyledAddSongModalFormItemInputImageURL>
  );
};

export {AddSongModalFormItemInputImageURL};
