import styled from '@emotion/styled';

const StyledAddSongModalForm = styled.form`
  width: 100%;
`;

const AddSongModalForm = ({children}) => {
  return <StyledAddSongModalForm>{children}</StyledAddSongModalForm>;
};

export {AddSongModalForm};
