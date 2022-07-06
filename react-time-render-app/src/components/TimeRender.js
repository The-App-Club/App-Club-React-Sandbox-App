import React, { useState, useEffect, useCallback } from 'react';

import styled from '@emotion/styled';
import { Clock } from '../icons/clock.js';

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTime = styled.time`
  display: block;
  font-size: 2rem;
  text-transform: uppercase;
  margin-left: 0.8rem;
`;

const TimeRender = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const renderTime = useCallback((date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const isAm = hours <= 12;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return (
      <StyledTime>
        <span>
          <span>{isAm ? 'AM ' : 'PM '}</span> {hours}:{minutes}:{seconds}
        </span>
      </StyledTime>
    );
  }, []);

  return (
    <Box>
      <Clock />
      {renderTime(now)}
    </Box>
  );
};

export { TimeRender };
