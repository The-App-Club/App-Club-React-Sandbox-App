import React, { useState, useEffect, useCallback } from 'react';

import { useTimeout } from '../hooks/useTimeout';

import styled from '@emotion/styled';

const Example = () => {
  const [seconds, setSeconds] = useState(0);

  useTimeout(() => {
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
