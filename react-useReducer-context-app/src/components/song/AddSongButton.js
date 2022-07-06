import styled from '@emotion/styled';

const StyledAddSongButton = styled.button`
  margin-top: 100px;
  margin-left: 2%;
  margin-right: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 200px;
  text-align: center;
  justify-content: center;
  height: 50px;
  border: none;
  background-color: #f42b4b;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: rgb(189, 1, 32);
    @media screen and (min-width: 1400px) {
      margin-bottom: 10px;
    }
  }
`;

const AddSongButton = ({children, handleClick}) => {
  return (
    <StyledAddSongButton onClick={handleClick}>{children}</StyledAddSongButton>
  );
};

export {AddSongButton};
