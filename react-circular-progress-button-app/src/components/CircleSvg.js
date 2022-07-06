import { useState } from 'react';
// https://emotion.sh/docs/@emotion/css#cx
import { cx, css } from '@emotion/css';
import styled from '@emotion/styled';
import MtSvgLines from 'react-mt-svg-lines';

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  fill: none;
`;

const isInitialPath = css`
  opacity: 0;
  fill: none;

  stroke: #123456;
  stroke-width: 5;
`;

const isAnimatePath = css`
  opacity: 1;
  transition: stroke-dashoffset 0.3s;
`;

const CircleSvg = ({ isAnimateStart = false, isLoading = false }) => {
  return (
    <MtSvgLines animate={isAnimateStart} duration={1000}>
      <StyledSvg width="70" height="70">
        <path
          className={cx(
            { [isInitialPath]: isLoading },
            { [isAnimatePath]: isLoading }
          )}
          d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
        />
      </StyledSvg>
    </MtSvgLines>
  );
};

export { CircleSvg };
