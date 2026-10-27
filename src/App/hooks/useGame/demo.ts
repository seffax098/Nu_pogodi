import { autopilot, createInitialState, tick } from 'engine';
import type { GameState } from 'types/game';

/** Демо крутится бесконечно: на этом счёте начинаем сначала, чтобы не разгоняться */
const DEMO_RESTART_SCORE = 100;

export const createDemo = (): GameState => createInitialState('A', 'playing');

/** Такт демо-режима на стартовом экране: играет автопилот, без звука и рекордов */
export function stepDemo(demo: GameState): GameState {
  const { state } = tick(autopilot(demo));

  return state.status === 'over' || state.score >= DEMO_RESTART_SCORE ? createDemo() : state;
}
