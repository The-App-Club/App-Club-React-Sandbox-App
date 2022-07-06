import React, {useEffect, useState, useCallback} from 'react';
import {useThrottle} from './useThrottle';

export function useOffsetTop(ref) {
  const [viewportTop, setViewportTop] = useState();
  const [pageOffsetTop, setPageOffsetTop] = useState();

  const handleScroll = useThrottle((e) => {
    const clientRect = ref?.current.getBoundingClientRect();
    setViewportTop(clientRect.top);
    const newPageOffsetTop = clientRect.top + window.pageYOffset;
    setPageOffsetTop(newPageOffsetTop);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {viewportTop, pageOffsetTop};
}
