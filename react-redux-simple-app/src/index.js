import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import { Home } from './pages/home';
import { About } from './pages/about';
import { NotFound } from './pages/not-found';

//redux関連読み込み
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//reducer読み込み
import { reducer } from './reducers';

//グローバルでの値保管場所生成
const store = createStore(reducer);

const App = ({ cowboy = 'bebop' }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
