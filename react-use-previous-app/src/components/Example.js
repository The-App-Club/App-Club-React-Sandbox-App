import React, { useState, useEffect, useCallback } from 'react';

import { usePrevious } from '../hooks/usePrevious';

import styled from '@emotion/styled';

const Example = () => {
  const [value, setValue] = useState(0);
  const lastValue = usePrevious(value);

  return (
    <>
      <h2>Example</h2>
      <p>
        Current: {value} - Previous: {lastValue || 0}
      </p>
      <button
        onClick={(e) => {
          setValue(value + 1);
        }}
      >
        Up
      </button>
    </>
  );
};

export { Example };
