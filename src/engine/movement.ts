import type { Chute, Direction, GameState } from 'types/game';

import { chuteLevel, chuteSide, toChute } from './chutes';

export function moveWolf(state: GameState, chute: Chute): GameState {
  if (state.status !== 'playing' || state.wolf === chute) {
    return state;
  }

  return { ...state, wolf: chute };
}

export function moveWolfRelative(state: GameState, direction: Direction): GameState {
  const side = chuteSide(state.wolf);
  const level = chuteLevel(state.wolf);

  switch (direction) {
    case 'left':
      return moveWolf(state, toChute('left', level));
    case 'right':
      return moveWolf(state, toChute('right', level));
    case 'up':
      return moveWolf(state, toChute(side, 'top'));
    case 'down':
      return moveWolf(state, toChute(side, 'bottom'));
    default:
      return state;
  }
}
