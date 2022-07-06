import styled from '@emotion/styled';

const StyledAddSongModalCancelButton = styled.button`
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
  background: transparent;
  border-color: #ddd;
  color: #666666;
  &:disabled {
    color: white;
    border-color: gray;
    background-color: gray;
  }
`;

const AddSongModalCancelButton = ({children, handleClick}) => {
  return (
    <StyledAddSongModalCancelButton type="button" onClick={handleClick}>
      {'Cancel'}
    </StyledAddSongModalCancelButton>
  );
};

export {AddSongModalCancelButton};
