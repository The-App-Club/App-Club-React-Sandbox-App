import React, { useState, useEffect, useCallback } from 'react';

import { useInterval } from '../hooks/useInterval';

import styled from '@emotion/styled';

const Example = () => {
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds(seconds + 1);
  }, 500);

  return (
    <>
      <h2>Example</h2>
      <p>{seconds}</p>
    </>
  );
};

export { Example };
