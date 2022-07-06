import { memo } from 'react';

const ChildMemoCallback = memo(({ handleClick }) => {
  console.log('render ChildMemoCallback');
  return (
    <button
      onClick={() => {
        handleClick();
      }}
    >
      ChildMemoCallback
    </button>
  );
});

export { ChildMemoCallback };
