import { useHover } from '../hooks/useHover';

const Item = ({ children }) => {
  const [hovered, eventHandlers] = useHover();

  return <li {...eventHandlers}>Item: {hovered && children}</li>;
};

export { Item };
