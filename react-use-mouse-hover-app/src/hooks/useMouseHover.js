import { useRef, useEffect, useState } from 'react';
let startTime, endTime, myReq;

function marquee({ isHover }, callback) {
  const now = new Date();
  if (!isHover) {
    cancelAnimationFrame(myReq);
  } else {
    myReq = requestAnimationFrame(() => {
      marquee({ isHover }, callback);
    });
  }
  callback(now);
}

const useMouseHover = (ref, mouseHoverTimeSeconds = 3000, notifyCallback) => {
  const [isHover, setIsHover] = useState(false);

  function start() {
    startTime = performance.now();
  }

  function end() {
    endTime = performance.now();
  }

  const handleMouseEnter = (e) => {
    setIsHover(true);
    start();
  };

  const handleMouseLeave = (e) => {
    setIsHover(false);
    end();
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [handleMouseEnter, handleMouseLeave]);

  useEffect(() => {
    marquee({ isHover }, (e) => {
      if (startTime && isHover) {
        const elapsedTime = performance.now() - startTime;
        if (mouseHoverTimeSeconds < elapsedTime) {
          notifyCallback({
            elapsedTime,
            lowerLimitMouseTimeSeconds: mouseHoverTimeSeconds,
            message: 'hover',
          });
          setIsHover(false);
        }
      }
    });
    return () => {
      cancelAnimationFrame(myReq);
    };
  }, [isHover, marquee]);
};

export { useMouseHover };
