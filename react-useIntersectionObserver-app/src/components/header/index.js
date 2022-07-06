import styled from '@emotion/styled';

const StyledHeader = styled.header`
  height: 96px;
  margin: 8px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const StyledThumbnail = styled.div`
  margin: 0 20px;
  height: 38px;
  width: 38px;
  border: 2px solid #212121;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledThumbnailImage = styled.img`
  width: 18px;
`;

const StyledHeaderContent = styled.h5`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.75rem;
  letter-spacing: 0.05rem;
  margin: 0 auto;
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <StyledThumbnail>
        <StyledThumbnailImage src={'/assets/left.svg'} alt="left" />
      </StyledThumbnail>
      <StyledHeaderContent>{'About'}</StyledHeaderContent>
      <StyledThumbnail>
        <StyledThumbnailImage src={'../../assets/send.svg'} alt="send" />
      </StyledThumbnail>
    </StyledHeader>
  );
};

export default Header;
