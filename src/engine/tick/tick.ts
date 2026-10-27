import { gameConfig } from 'config/gameConfig';
import type { GameConfig } from 'types/config';
import type { GameEvent, GameState, RandomFn, TickResult } from 'types/game';

import { advanceCrash } from './crash';
import { advanceEggs } from './eggs';
import { updateHare } from './hare';
import { trySpawn } from './spawn';

export function tick(state: GameState, random: RandomFn = Math.random, config: GameConfig = gameConfig): TickResult {
  if (state.status !== 'playing') {
    return { state, events: [] };
  }

  const events: GameEvent[] = [];
  let next: GameState = updateHare({ ...state, ticks: state.ticks + 1 }, random, config, events);

  if (next.crash) {
    return { state: { ...next, crash: advanceCrash(next.crash, config) }, events };
  }

  next = advanceEggs(next, config, events);

  if (next.status === 'playing' && !next.crash) {
    next = trySpawn(next, random, config);
  }

  return { state: next, events };
}
