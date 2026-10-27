import { useCallback, useRef, useState } from 'react';

import type { PiezoSound } from 'audio';
import { createInitialState, moveWolf, moveWolfRelative, startGame, togglePause } from 'engine';
import type { Chute, Direction, GameMode, GameState, TickResult } from 'types/game';
import { vibrate } from 'utils/device';

import { createDemo } from './demo';
import { useAutoPause } from './useAutoPause';
import { useGameLoop } from './useGameLoop';
import type { TickAccumulator } from './useGameLoop';
import { useHiScores } from './useHiScores';

/**
 * Состояние партии живёт в ref (чтобы requestAnimationFrame всегда видел актуальное),
 * а React перерисовывается только когда что-то поменялось.
 */
export function useGame(sound: PiezoSound) {
  const gameRef = useRef<GameState>(createInitialState());
  const demoRef = useRef<GameState>(createDemo());
  const accRef = useRef<TickAccumulator>({ game: 0, demo: 0 });
  const [, setVersion] = useState(0);
  const { hiScores, isNewRecord, recordResult, resetRecordFlag } = useHiScores();

  const rerender = useCallback(() => setVersion((v) => v + 1), []);

  const setGame = useCallback(
    (state: GameState) => {
      if (state !== gameRef.current) {
        gameRef.current = state;
        rerender();
      }
    },
    [rerender],
  );

  const onTick = useCallback(
    ({ state, events }: TickResult) => {
      gameRef.current = state;
      events.forEach((event) => {
        sound.play(event);
        if (event.type === 'miss') {
          vibrate(120);
        }
        if (event.type === 'gameOver') {
          recordResult(state);
          vibrate([80, 60, 200]);
        }
      });
    },
    [sound, recordResult],
  );

  useGameLoop({ gameRef, demoRef, accRef, onTick, rerender });
  useAutoPause(gameRef, setGame);

  const start = useCallback(
    (mode: GameMode) => {
      sound.unlock();
      sound.playStart();
      accRef.current.game = 0;
      resetRecordFlag();
      setGame(startGame(mode));
    },
    [sound, setGame, resetRecordFlag],
  );

  const move = useCallback((chute: Chute) => setGame(moveWolf(gameRef.current, chute)), [setGame]);
  const moveRelative = useCallback(
    (direction: Direction) => setGame(moveWolfRelative(gameRef.current, direction)),
    [setGame],
  );
  const pause = useCallback(() => setGame(togglePause(gameRef.current)), [setGame]);
  const toMenu = useCallback(() => setGame(createInitialState(gameRef.current.mode)), [setGame]);

  return {
    game: gameRef.current,
    demo: demoRef.current,
    hiScores,
    isNewRecord,
    start,
    move,
    moveRelative,
    pause,
    toMenu,
  };
}

export type GameApi = ReturnType<typeof useGame>;
