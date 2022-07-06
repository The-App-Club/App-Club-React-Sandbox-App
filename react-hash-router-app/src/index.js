import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Container} from './components/Container';
import {Navigation} from './components/Navigation';
import {SectionList} from './components/SectionList';
import ScrollHandler from './components/ScrollHandler';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <ScrollHandler />
        <Navigation />
        <SectionList />
      </Container>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
