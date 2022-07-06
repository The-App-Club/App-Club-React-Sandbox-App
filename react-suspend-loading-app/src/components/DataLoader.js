import { useMemo, useState } from 'react';
import { fetchData1 } from '../plugins/fetch';
import { useData1 } from '../hooks/useData1';

const DataLoader1 = () => {
  const data = useData1('DataLoader1');
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};

const DataLoader2 = () => {
  const data = useData1('DataLoader2');
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
export { DataLoader1, DataLoader2 };
