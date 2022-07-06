import React from 'react';
import ReactDOM from 'react-dom';
import { useRef } from 'react';
import { useIntersection } from 'react-use';
import { Global, css } from '@emotion/react';

import './index.scss';

import { Layout } from './layouts/default';
import { Section } from './components/section';
import { ScrollSection } from './components/scroll-section';

const App = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  return (
    <Layout>
      <Section></Section>
      <ScrollSection
        ref={sectionRef}
        intersection={intersection}
      ></ScrollSection>
    </Layout>
  );
};

ReactDOM.render(
  <>
    <Global
      styles={css`
        body {
          background: #ffdc7c;
          font-family: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
        }
      `}
    />
    <App />
  </>,
  document.getElementById('root')
);
