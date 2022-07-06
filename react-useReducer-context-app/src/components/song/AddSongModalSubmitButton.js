import styled from '@emotion/styled';

const StyledAddSongModalSubmitButton = styled.button`
  display: inline-block;
  font-family: 'Open Sans Semibold', sans-serif;
  white-space: nowrap;
  padding: 7px 10px;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  outline: 0;
  border-radius: 4px;
  transition: background 0.4s ease;
  font-size: 14px;
  background: #0192dd;
  color: #fff;
  &:disabled {
    color: white;
    border-color: gray;
    background-color: gray;
  }
`;

const AddSongModalSubmitButton = ({
  children,
  handleClick,
  isButtonDisabled,
  isSongSubmitting,
}) => {
  return (
    <StyledAddSongModalSubmitButton
      type="button"
      onClick={handleClick}
      disabled={isButtonDisabled}
    >
      {isSongSubmitting ? 'Submitting...' : 'Submit'}
    </StyledAddSongModalSubmitButton>
  );
};

export {AddSongModalSubmitButton};
