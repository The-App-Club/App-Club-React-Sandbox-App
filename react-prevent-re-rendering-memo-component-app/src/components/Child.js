const Child = ({ count }) => {
  console.log('render Child');
  return <p>Child: {count}</p>;
};

export { Child };
