import type { GameConfig } from 'types/config';
import type { GameEvent, GameState } from 'types/game';

import { catchEgg, dropEgg } from './landing';

export function advanceEggs(state: GameState, config: GameConfig, events: GameEvent[]): GameState {
  if (state.eggs.length === 0) {
    return state;
  }

  const moved = state.eggs.map((egg) => ({ ...egg, step: egg.step + 1 }));
  const leader = moved.reduce((best, egg) => (egg.step > best.step ? egg : best));
  events.push({ type: 'step', chute: leader.chute });

  const next = { ...state, eggs: moved.filter((egg) => egg.step < config.rampSteps) };

  if (leader.step < config.rampSteps) {
    return next;
  }

  return leader.chute === state.wolf ? catchEgg(next, config, events) : dropEgg(next, leader.chute, config, events);
}
