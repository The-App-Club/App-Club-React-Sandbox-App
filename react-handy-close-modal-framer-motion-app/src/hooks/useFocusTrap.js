import { useEffect } from 'react';
import { createFocusTrap } from 'focus-trap';

function useFocusTrap({ ref, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return;
    }

    const trap = createFocusTrap(ref.current, {
      clickOutsideDeactivates: true,
      escapeDeactivates: true,
      returnFocusOnDeactivate: true,
      onDeactivate: onClose,
      delayInitialFocus: false,
    });
    trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [ref, isOpen, onClose]);
}

export { useFocusTrap };
