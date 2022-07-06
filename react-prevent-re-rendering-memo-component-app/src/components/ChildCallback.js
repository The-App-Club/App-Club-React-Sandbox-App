const ChildCallback = ({ handleClick }) => {
  console.log('render ChildCallback');
  return (
    <button
      onClick={() => {
        handleClick();
      }}
    >
      ChildCallback
    </button>
  );
};

export { ChildCallback };
