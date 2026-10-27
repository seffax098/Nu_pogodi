import { useEffect } from 'react';
import type { MutableRefObject } from 'react';

import { togglePause } from 'engine';
import type { GameState } from 'types/game';

/** Свернули вкладку — ставим на паузу, как будто закрыли крышку */
export function useAutoPause(gameRef: MutableRefObject<GameState>, setGame: (state: GameState) => void) {
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden && gameRef.current.status === 'playing') {
        setGame(togglePause(gameRef.current));
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [setGame]);
}
