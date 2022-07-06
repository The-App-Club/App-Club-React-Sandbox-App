import React, { useState, useEffect, useCallback } from 'react';

import styled from '@emotion/styled';

import { sleep } from '../plugins/sleep';

const SometimesSuspend = ({ children }) => {
  console.log('SometimesSuspend  is rendered');
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return (
    <>
      {children}
      <p>Hello, world!</p>
    </>
  );
};

export { SometimesSuspend };
