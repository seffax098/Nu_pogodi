import { useCallback, useEffect, useRef, useState } from 'react';

import type { ControlAction } from 'types/controls';

const PRESS_FLASH_MS = 120;

/** Кнопка на корпусе на мгновение «утапливается», даже если нажали клавишу на клавиатуре */
export function usePressFlash() {
  const [pressed, setPressed] = useState<ControlAction | null>(null);
  const timer = useRef(0);

  const flash = useCallback((action: ControlAction) => {
    setPressed(action);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPressed(null), PRESS_FLASH_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return { pressed, flash };
}
