import { memo } from 'react';

const ChildMemoHighCost = memo(({ count }) => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  console.log('render ChildMemoHighCost');
  return <p>ChildMemoHighCost: {count}</p>;
});

export { ChildMemoHighCost };
