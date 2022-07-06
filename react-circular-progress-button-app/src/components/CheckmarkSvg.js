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
`;

const isInitialPath = css`
  opacity: 0;
  fill: none;

  stroke: #fff;
  stroke-linecap: round;
  stroke-width: 4;
  transition: opacity 0.1s;
`;

const isAnimatePath = css`
  opacity: 1;
  transition: stroke-dashoffset 0.3s;
`;

const CheckmarkSvg = ({ isAnimateSuccess = false, isSuccess = false }) => {
  return (
    <MtSvgLines animate={isAnimateSuccess} duration={750}>
      <StyledSvg width="70" height="70">
        <path
          className={cx(
            { [isInitialPath]: isSuccess },
            { [isAnimatePath]: isSuccess }
          )}
          d="m31.5,46.5l15.3,-23.2"
        />
        <path
          className={cx(
            { [isInitialPath]: isSuccess },
            { [isAnimatePath]: isSuccess }
          )}
          d="m31.5,46.5l-8.5,-7.1"
        />
      </StyledSvg>
    </MtSvgLines>
  );
};

export { CheckmarkSvg };
