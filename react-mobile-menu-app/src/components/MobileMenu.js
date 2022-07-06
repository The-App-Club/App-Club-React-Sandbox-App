import { useEffect } from 'react';
import { gsap } from 'gsap';
import { IconHamburger } from '../icons/IconHamburger';
import clsx from 'clsx';
import styled from '@emotion/styled';

const StyledButton = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const PortalMenu = styled.div`
  transition: all 0.2s;
  padding: 10px;
  visibility: hidden;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  background: rgb(247, 238, 205);
  background: linear-gradient(
    0deg,
    rgba(247, 238, 205, 1) 0%,
    rgba(226, 217, 198, 0.9976365546218487) 75%
  );
  &.is-active {
    visibility: visible;
    width: 100vw;
    height: 100vh;
  }
`;
const MobileMenu = ({ isOn, handleToggle }) => {
  useEffect(() => {
    let tween;
    const staggerItems = document.querySelectorAll('.stagger');
    if (isOn) {
      tween = gsap.to(staggerItems, {
        autoAlpha: 1,
        stagger: 0.04,
        delay: 0.38,
        scaleY: 1,
      });
    } else {
      tween = gsap.to(staggerItems, {
        autoAlpha: 0,
        scaleY: 0.95,
      });
    }

    return () => {
      tween.kill();
    };
  }, [isOn]);
  return (
    <>
      <StyledButton
        className={clsx('button', { ['is-active']: isOn })}
        onClick={handleToggle}
        aria-label="toggle menu"
      >
        <IconHamburger isOpen={isOn}></IconHamburger>
      </StyledButton>

      <PortalMenu className={clsx('portal', { ['is-active']: isOn })}>
        <div className="stagger">
          <a href="#">About</a>
        </div>
        <div className="stagger">
          <a href="#">Contact</a>
        </div>
      </PortalMenu>
    </>
  );
};

export { MobileMenu };
