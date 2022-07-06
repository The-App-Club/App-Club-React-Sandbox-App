import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

  const doubledCount = useMemo(() => double(count2), [count2]);

  // const doubledCountNotMemo = double(count2);
  const Counter = useMemo(() => {
    console.log('render Counter');
    const doubledCount = double(count2);

    return (
      <p>
        Counter: {count2}, {doubledCount}
      </p>
    );
  }, [count2]);

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      {Counter}
      {/* <p>
        Counter: {count2}, {doubledCount}
      </p> */}
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
