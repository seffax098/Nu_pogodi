import type { GameConfig } from 'types/config';
import type { GameState, RandomFn } from 'types/game';

import { CHUTES } from '../chutes';
import { getMaxEggs } from '../difficulty';

function canSpawn(state: GameState, config: GameConfig): boolean {
  const mode = config.modes[state.mode];

  return (
    state.eggs.length < getMaxEggs(state, config) &&
    state.ticks - state.lastSpawnTick >= mode.minSpawnGap &&
    !state.eggs.some((egg) => egg.step === 0)
  );
}

export function trySpawn(state: GameState, random: RandomFn, config: GameConfig): GameState {
  if (!canSpawn(state, config) || random() >= config.modes[state.mode].spawnChance) {
    return state;
  }

  const chute = CHUTES[Math.min(CHUTES.length - 1, Math.floor(random() * CHUTES.length))];

  return {
    ...state,
    eggs: [...state.eggs, { id: state.nextEggId, chute, step: 0 }],
    nextEggId: state.nextEggId + 1,
    lastSpawnTick: state.ticks,
  };
}
