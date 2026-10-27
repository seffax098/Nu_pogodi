import type { GameMode, GameState, GameStatus } from 'types/game';

export function createInitialState(mode: GameMode = 'A', status: GameStatus = 'idle'): GameState {
  return {
    status,
    mode,
    wolf: 0,
    eggs: [],
    score: 0,
    misses: 0,
    hare: false,
    crash: null,
    ticks: 0,
    lastSpawnTick: -Infinity,
    nextEggId: 1,
  };
}

export const startGame = (mode: GameMode): GameState => createInitialState(mode, 'playing');

export function togglePause(state: GameState): GameState {
  if (state.status === 'playing') {
    return { ...state, status: 'paused' };
  }
  if (state.status === 'paused') {
    return { ...state, status: 'playing' };
  }

  return state;
}
