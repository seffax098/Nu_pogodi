import { gameConfig } from 'config/gameConfig';
import type { GameConfig } from 'types/config';
import type { GameState } from 'types/game';

export function getTickInterval(state: GameState, config: GameConfig = gameConfig): number {
  const mode = config.modes[state.mode];
  const hundreds = Math.floor(state.score / 100);
  const withinHundred = state.score % 100;
  const interval = mode.startInterval - withinHundred * mode.accelPerPoint - hundreds * mode.accelPerHundred;

  return Math.max(mode.minInterval, Math.round(interval));
}

export function getMaxEggs(state: GameState, config: GameConfig = gameConfig): number {
  const mode = config.modes[state.mode];

  return Math.min(mode.maxEggs, mode.startEggs + Math.floor(state.score / mode.eggsEvery));
}
