import { useEffect } from 'react';
import type { MutableRefObject } from 'react';

import { getTickInterval, tick } from 'engine';
import type { GameState, TickResult } from 'types/game';

import { stepDemo } from './demo';

/** Максимальный шаг времени за кадр: после сворачивания вкладки игра не «перематывается» */
const MAX_FRAME_MS = 250;

export interface TickAccumulator {
  game: number;
  demo: number;
}

export interface GameLoopOptions {
  gameRef: MutableRefObject<GameState>;
  demoRef: MutableRefObject<GameState>;
  accRef: MutableRefObject<TickAccumulator>;
  onTick: (result: TickResult) => void;
  rerender: () => void;
}

/** Накопить время и сообщить, пора ли делать такт */
function consume(acc: TickAccumulator, key: keyof TickAccumulator, dt: number, interval: number): boolean {
  acc[key] += dt;
  if (acc[key] < interval) {
    return false;
  }
  acc[key] -= interval;

  return true;
}

/** Цикл на requestAnimationFrame: в игре тикает партия, на стартовом экране — демо */
export function useGameLoop({ gameRef, demoRef, accRef, onTick, rerender }: GameLoopOptions) {
  useEffect(() => {
    let frameId = 0;
    let last = performance.now();

    const step = (dt: number): boolean => {
      const game = gameRef.current;

      if (game.status === 'playing' && consume(accRef.current, 'game', dt, getTickInterval(game))) {
        onTick(tick(game));

        return true;
      }
      if (game.status === 'idle' && consume(accRef.current, 'demo', dt, getTickInterval(demoRef.current))) {
        demoRef.current = stepDemo(demoRef.current);

        return true;
      }

      return false;
    };

    const loop = (now: number) => {
      if (step(Math.min(now - last, MAX_FRAME_MS))) {
        rerender();
      }
      last = now;
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frameId);
  }, [onTick, rerender]);
}
