import styled from '@emotion/styled';

import { Layout } from '../../layouts/section';

const StyledSection = styled.section`
  --yellow: #ffdc7c;
  width: 100%;
  background: var(--yellow);
  position: relative;
  padding: 0 24px 60px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StyledSectionThumbnail = styled.div`
  height: 200px;
  width: 100%;
  background: #f0f1f2;
  box-sizing: border-box;
  border-radius: 36px;
  margin: 0 auto 24px;
  overflow: hidden;
`;

const StyledSectionThumbnailImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledSectionHeader = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  margin: 8px 0;
`;

const StyledSectionDescription = styled.p`
  font-size: 1rem;
  line-height: 24px;
`;

const Section = ({ children }) => {
  return (
    <Layout>
      <StyledSection>
        <StyledSectionThumbnail>
          <StyledSectionThumbnailImage
            src="https://cdn.dribbble.com/users/997665/screenshots/9634478/media/8ad68f67fdbfb09bc054937edecf2d27.png"
            alt=""
          />
        </StyledSectionThumbnail>
        <StyledSectionHeader>{'Alara Frank'}</StyledSectionHeader>
        <StyledSectionDescription>
          Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit.
          Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et
          tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique.
          Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio
          tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas
          pretium.
        </StyledSectionDescription>
      </StyledSection>
    </Layout>
  );
};

export { Section };
