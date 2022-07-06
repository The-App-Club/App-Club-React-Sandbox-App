import { memo } from 'react';

const ChildMemo = memo(({ count }) => {
  console.log('render ChildMemo');
  return <p>ChildMemo: {count}</p>;
});

export { ChildMemo };
