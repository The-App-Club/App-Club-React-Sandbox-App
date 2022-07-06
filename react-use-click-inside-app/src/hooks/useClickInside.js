import { useRef, useEffect } from 'react';

const useClickInside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback({ event: e, message: 'clicked inside' });
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export { useClickInside };
