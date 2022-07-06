import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect, useTransition } from 'react';
import styled from '@emotion/styled';

import { Loading } from './components/Loading';
import { ItemList } from './components/ItemList';

import logo from './assets/logo.svg';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const generateItemList = ({ nuts, logo, searchTerm }) => {
  return [...new Array(nuts)].map((_, index) => {
    return (
      <ItemList
        key={index}
        index={index}
        logo={logo}
        searchTerm={searchTerm}
      ></ItemList>
    );
  });
};

function App() {
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResult(null);
    } else {
      const nuts = 5000;
      const rows = generateItemList({ nuts, logo, searchTerm });
      startTransition(() => {
        setSearchResult(rows);
      });
    }
  }, [searchTerm]);

  return (
    <StyledContainer>
      <div className="SearchInput">
        <input type="text" value={searchTerm} onChange={handleChange} />
      </div>
      <div className="SearchResult">
        {isPending && <Loading />}
        {!isPending && searchResult}
      </div>
    </StyledContainer>
  );
}

// react 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
