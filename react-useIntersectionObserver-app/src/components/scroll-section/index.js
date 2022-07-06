import { forwardRef } from 'react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import { Layout } from '../../layouts/section';

const StyledSection = styled.section`
  --purp: #7640ed;
  --dpurp: #452094;
  background: var(--purp);
  height: 730px;
  padding: 60px 24px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  color: #fff;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background: var(--dpurp);
    height: 600px;
    width: 100px;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
`;

const StyledSectionContent = styled.div`
  position: relative;
  top: 60px;
`;

const StyledSectionHeader = styled.h3`
  margin: 8px 0;
  opacity: 0;
  font-size: 2rem;
  font-weight: 900;
`;

const StyledSectionDescription = styled.p`
  opacity: 0;
`;

const StyledSectionLinkContainer = styled.div`
  opacity: 0;
`;

const StyledSectionLink = styled.a`
  --dpurp: #452094;
  background: var(--dpurp);
  width: 100%;
  border-radius: 18px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  margin-top: 48px;
`;

const _ScrollSection = ({ intersection }, ref) => {

  
  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };

  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut('.fade')
    : fadeIn('.fade');

  return (
    <Layout>
      <StyledSection ref={ref}>
        <StyledSectionContent>
          <StyledSectionHeader className="fade">
            The talk of what makes a champion.
          </StyledSectionHeader>
          <StyledSectionDescription className="fade">
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </StyledSectionDescription>
          <StyledSectionLinkContainer className="fade">
            <StyledSectionLink href="/">{'Click!'}</StyledSectionLink>
          </StyledSectionLinkContainer>
        </StyledSectionContent>
      </StyledSection>
    </Layout>
  );
};

const ScrollSection = forwardRef(_ScrollSection);

export { ScrollSection };
