import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from '@emotion/styled';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
