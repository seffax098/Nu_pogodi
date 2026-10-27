import type { GameConfig } from 'types/config';
import type { Chute, GameEvent, GameState } from 'types/game';

import { chuteSide } from '../chutes';

export function catchEgg(state: GameState, config: GameConfig, events: GameEvent[]): GameState {
  const score = state.score + 1;
  events.push({ type: 'catch' });

  if (config.bonusScores.includes(score) && state.misses > 0) {
    events.push({ type: 'bonus' });

    return { ...state, score, misses: 0 };
  }

  return { ...state, score };
}

export function dropEgg(state: GameState, chute: Chute, config: GameConfig, events: GameEvent[]): GameState {
  const half = state.hare;
  const misses = Math.min(config.maxMissHalves, state.misses + (half ? 1 : 2));
  events.push({ type: 'miss', half });

  const next: GameState = { ...state, misses, eggs: [], crash: { side: chuteSide(chute), frame: 0 } };

  if (misses >= config.maxMissHalves) {
    events.push({ type: 'gameOver' });

    return { ...next, status: 'over' };
  }

  return next;
}
