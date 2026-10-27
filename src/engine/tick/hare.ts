import type { GameConfig } from 'types/config';
import type { GameEvent, GameState, RandomFn } from 'types/game';

export function updateHare(state: GameState, random: RandomFn, config: GameConfig, events: GameEvent[]): GameState {
  const roll = random();

  if (state.hare) {
    return roll < config.hare.hideChance ? { ...state, hare: false } : state;
  }
  if (roll < config.hare.appearChance) {
    events.push({ type: 'hare' });

    return { ...state, hare: true };
  }

  return state;
}
