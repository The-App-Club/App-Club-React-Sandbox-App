import React, { useState, useEffect, useRef } from 'react';

import { useFetch } from '../hooks/useFetch';

import styled from '@emotion/styled';

const Example = () => {
  const { response, error } = useFetch('https://swapi.dev/api/people/1', {});

  if (error) {
    return (
      <>
        <h2>Something Went Wrong...</h2>
      </>
    );
  }

  if (!response) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  if (response) {
    console.log(response);
  }

  return (
    <>
      <span>{response.name}</span>
    </>
  );
};

export { Example };
