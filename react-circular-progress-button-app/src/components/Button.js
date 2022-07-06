import { useState } from 'react';
// https://emotion.sh/docs/@emotion/css#cx
import { cx, css } from '@emotion/css';
import styled from '@emotion/styled';
import MtSvgLines from 'react-mt-svg-lines';

import { CheckmarkSvg } from './CheckmarkSvg';
import { CircleSvg } from './CircleSvg';
import { CrossSvg } from './CrossSvg';

const StyledProgressButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 30px 0 0;
`;

const StyledProgressButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 70px;
  border: 2px solid #123456;
  border-radius: 40px;
  background: transparent;
  color: #123456;
  font-size: 1.2rem;
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s,
    border-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #123456;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

// ホバー時の配色を活かすため、インラインスタイルを与えている
const isLoadingButtonStyle = css`
  width: 70px !important;
  border-width: 5px !important;
  border-color: #ddd !important;
  background-color: transparent !important;
  color: #fff !important;
`;

const isSuccessButtonStyle = css`
  border-color: #1ecd97 !important;
  background-color: #1ecd97 !important;
  transition: background-color 0.3s, width 0.3s, border-width 0.3s !important;
`;

const isErrorButtonStyle = css`
  border-color: #fb797e !important;
  background-color: #fb797e !important;
  transition: background-color 0.3s, width 0.3s, border-width 0.3s !important;
`;

const isInitialButtonTextStyle = css`
  opacity: 1;
  transition: opacity 0.15s;
  transition: opacity 0.3s 0.1s;
`;

const isLoadingButtonTextStyle = css`
  opacity: 0 !important;
`;

const isSuccessButtonTextStyle = css`
  opacity: 0 !important;
`;

const isErrorButtonTextStyle = css`
  opacity: 0 !important;
`;

const Button = ({ resultStatus = 0 }) => {
  const [isDisable, setIsDisable] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isAnimateStart, setIsAnimateStart] = useState(false);
  const [isAnimateSuccess, setIsAnimateSuccess] = useState(false);
  const [isAnimateError, setIsAnimateError] = useState(false);

  const buttonHandler = (e) => {
    setIsDisable(false);
    setIsLoading(true);
    setIsAnimateStart(true);
    endAnimation();
  };

  const endAnimation = () => {
    setTimeout(() => {
      setIsDisable(true);
      setIsLoading(false);
      setIsAnimateStart(false);
      if (!resultStatus) {
        setIsSuccess(true);
        setIsAnimateSuccess(true);
      } else {
        setIsError(true);
        setIsAnimateError(true);
      }
      setTimeout(() => {
        reset();
      }, 1300);
    }, 1000);
  };

  const reset = () => {
    setIsDisable(false);
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
    setIsAnimateStart(false);
    setIsAnimateSuccess(false);
    setIsAnimateError(false);
  };

  const renderIcon = ({
    isAnimateStart,
    isAnimateSuccess,
    isAnimateError,
    isLoading,
    isSuccess,
    isError,
  }) => {
    if (isLoading) {
      return (
        <CircleSvg isAnimateStart={isAnimateStart} isLoading={isLoading} />
      );
    } else if (isSuccess) {
      return (
        <CheckmarkSvg
          isAnimateSuccess={isAnimateSuccess}
          isSuccess={isSuccess}
        />
      );
    } else if (isError) {
      return <CrossSvg isAnimateError={isAnimateError} isError={isError} />;
    }
  };

  return (
    <StyledProgressButtonWrapper>
      <StyledProgressButton
        onClick={buttonHandler}
        disabled={isDisable ? 'disabled' : ''}
        className={cx(
          { [isLoadingButtonStyle]: isLoading },
          { [isSuccessButtonStyle]: isSuccess },
          { [isErrorButtonStyle]: isError }
        )}
      >
        <span
          className={cx(
            { [isLoadingButtonTextStyle]: isLoading },
            { [isSuccessButtonTextStyle]: isSuccess },
            { [isErrorButtonTextStyle]: isError }
          )}
        >
          Submit
        </span>
      </StyledProgressButton>

      {renderIcon({
        isAnimateStart,
        isAnimateSuccess,
        isAnimateError,
        isLoading,
        isSuccess,
        isError,
      })}
    </StyledProgressButtonWrapper>
  );
};

export { Button };
