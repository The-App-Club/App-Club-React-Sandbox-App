import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Cursor } from './components/Cursor';

import { Pudding } from './components/Pudding';

function App() {
  return (
    <Cursor>
      <Pudding></Pudding>
    </Cursor>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
