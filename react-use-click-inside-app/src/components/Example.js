import React, { useState, useEffect, useRef } from 'react';

import { useClickInside } from '../hooks/useClickInside';

import styled from '@emotion/styled';

const HitBox = styled.div`
  border: 5px solid green;
  height: 300px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Example = () => {
  const clickRef = useRef();
  useClickInside(clickRef, (e) => {
    console.log('hoge', e);
  });
  return (
    <HitBox ref={clickRef}>
      <p>Hit the box!</p>
    </HitBox>
  );
};

export { Example };
