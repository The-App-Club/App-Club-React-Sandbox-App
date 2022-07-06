import {throttle} from 'throttle-debounce';
import {useCallback} from 'react';

const useThrottle = (fn, delayTime = 100) => {
  const throttleFunc = throttle(delayTime, fn, {
    noLeading: false,
    noTrailing: false,
  });
  return useCallback(throttleFunc, []);
};

export {useThrottle};
