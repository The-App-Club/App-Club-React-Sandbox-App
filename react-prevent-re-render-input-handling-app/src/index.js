import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { ItemList } from './components/ItemList';

const App = () => {
  const [itemInfoList, setItemInfoList] = useState([
    { value: '' },
    { value: '' },
    { value: '' },
  ]);

  const handleDelete = useCallback((e, value, items) => {
    console.log(items.filter((item) => {
      return item.value !== value;
    }))
    setItemInfoList(
      items.filter((item) => {
        return item.value !== value;
      })
    );
  }, []);

  return (
    <ItemList
      itemInfoList={itemInfoList}
      handleDelete={handleDelete}
    ></ItemList>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
