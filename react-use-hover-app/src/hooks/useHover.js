import { useState, useMemo } from 'react';

// https://stackoverflow.com/questions/61562660/react-hooks-hover-effect
const useHover = () => {
  const [hovered, setHovered] = useState();

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      },
    }),
    []
  );

  return [hovered, eventHandlers];
};

export { useHover };
