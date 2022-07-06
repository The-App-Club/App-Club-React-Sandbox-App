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

const CrossSvg = ({ isAnimateError = false, isError = false }) => {
  return (
    <MtSvgLines animate={isAnimateError} duration={750}>
      <StyledSvg width="70" height="70">
        <path
          className={cx(
            { [isInitialPath]: isError },
            { [isAnimatePath]: isError }
          )}
          d="m35,35l-9.3,-9.3"
        />
        <path
          className={cx(
            { [isInitialPath]: isError },
            { [isAnimatePath]: isError }
          )}
          d="m35,35l9.3,9.3"
        />
        <path
          className={cx(
            { [isInitialPath]: isError },
            { [isAnimatePath]: isError }
          )}
          d="m35,35l-9.3,9.3"
        />
        <path
          className={cx(
            { [isInitialPath]: isError },
            { [isAnimatePath]: isError }
          )}
          d="m35,35l9.3,-9.3"
        />
      </StyledSvg>
    </MtSvgLines>
  );
};

export { CrossSvg };
