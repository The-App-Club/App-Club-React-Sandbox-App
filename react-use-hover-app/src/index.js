import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';

import { Item } from './components/Item';

const myObject = {
  a: 'A1',
  b: 'B2',
  c: 'C3',
};

function App() {
  const reactionItems = Object.entries(myObject).map(([key, value]) => {
    return <Item key={key}>{value}</Item>;
  });

  return (
    <div className="App">
      <h2>Reactions</h2>
      <ul>{reactionItems}</ul>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
