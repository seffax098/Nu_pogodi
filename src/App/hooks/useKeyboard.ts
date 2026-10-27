import { useEffect, useRef } from 'react';

import { keyBindings, noRepeatActions } from 'config/keyBindings';
import type { ControlAction, OnControl } from 'types/controls';

const actionByCode = new Map<string, ControlAction>();
(Object.keys(keyBindings) as ControlAction[]).forEach((action) => {
  keyBindings[action].forEach((code) => actionByCode.set(code, action));
});

export function useKeyboard(onAction: OnControl) {
  const handlerRef = useRef(onAction);
  handlerRef.current = onAction;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      const action = actionByCode.get(event.code);
      if (!action) {
        return;
      }
      event.preventDefault();
      if (event.repeat && noRepeatActions.includes(action)) {
        return;
      }
      handlerRef.current(action);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
}
