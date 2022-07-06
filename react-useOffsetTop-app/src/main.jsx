import {createRoot} from 'react-dom/client';
import {useCallback, useEffect, useRef, useState, useMemo} from 'react';
import {css} from '@emotion/css';
import './styles/index.scss';
import {throttle} from 'throttle-debounce';
import {useOffsetTop} from './hooks/useOffsetTop';
import {useThrottle} from './hooks/useThrottle';

const maxIconSize = 80;
const minIconSize = 20;

const App = () => {
  const iconRef = useRef(null);
  const {pageOffsetTop, viewportTop} = useOffsetTop(iconRef);

  const iconSize = useMemo(() => {
    if (
      pageOffsetTop === 0 ||
      pageOffsetTop === undefined ||
      viewportTop === undefined
    ) {
      return maxIconSize;
    }
    if (viewportTop < 0) {
      return minIconSize;
    }
    const size =
      minIconSize + (viewportTop / pageOffsetTop) * (maxIconSize - minIconSize);
    console.log(
      `viewportTop, pageOffsetTop, size`,
      viewportTop,
      pageOffsetTop,
      size
    );
    return size.toFixed(2);
  }, [pageOffsetTop, viewportTop]);

  return (
    <div>
      <header>
        <div
          ref={iconRef}
          className={css`
            width: ${iconSize}px;
            height: ${iconSize}px;
            margin-top: 40vh;
            transition: width, height 200ms ease-in-out;
            background: red;
            border-radius: 50%;
          `}
        />
        Hello
      </header>
      <main>
        <article>
          <section></section>
        </article>
      </main>
      <footer>Bye</footer>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
