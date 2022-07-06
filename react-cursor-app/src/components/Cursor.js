import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { isMobile } from 'react-device-detect';

import styled from '@emotion/styled';

import { gsap } from 'gsap';

const CursorFollower = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  z-index: 9999;
  width: 20px;
  height: 20px;
  background-size: contain;
`;

const CursorContext = createContext(undefined);

const Cursor = ({ children }) => {
  const cursorRef = useRef(null);
  const [cursorType, setCurrentType] = useState(
    'https://icons.iconarchive.com/icons/goescat/macaron/128/stellarium-icon.png'
  );
  const [isSp, setIsSp] = useState(false);

  useEffect(() => {
    setIsSp(isMobile);
  }, []);

  useEffect(() => {
    if (!cursorRef.current) {
      return;
    }

    function handleMouseMove(e) {
      const targetDom = e.target;

      // https://greensock.com/docs/v3/GSAP/Timeline
      const tl = gsap.timeline({
        defaults: {
          x: e.clientX - 10,
          y: e.clientY - 10,
          ease: 'power2.out',
        },
      });

      tl.to(cursorRef.current, {
        opacity: 1,
      });

      if (targetDom instanceof HTMLElement || targetDom instanceof SVGElement) {
        if (targetDom.dataset.cursor) {
          setCurrentType(targetDom.dataset.cursor);
        } else if (targetDom.closest('button') || targetDom.closest('a')) {
          setCurrentType(
            'https://icons.iconarchive.com/icons/goescat/macaron/128/deluge-icon.png'
          );
        } else if (
          targetDom.closest('p') ||
          targetDom.closest('b') ||
          targetDom.closest('span') ||
          targetDom.closest('h1') ||
          targetDom.closest('h2') ||
          targetDom.closest('h3') ||
          targetDom.closest('h4') ||
          targetDom.closest('h5') ||
          targetDom.closest('h5') ||
          targetDom.closest('textarea')
        ) {
          setCurrentType(
            'https://icons.iconarchive.com/icons/goescat/macaron/128/telegram-icon.png'
          );
        } else {
          setCurrentType(
            'https://icons.iconarchive.com/icons/goescat/macaron/128/firefox-icon.png'
          );
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isSp]);

  return (
    <>
      {isSp === false && (
        <CursorFollower
          ref={cursorRef}
          style={{ backgroundImage: `url(${cursorType})` }}
        ></CursorFollower>
      )}
      {children}
    </>
  );
};

export { Cursor };
