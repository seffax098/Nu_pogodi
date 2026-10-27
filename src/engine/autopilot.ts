import { gameConfig } from 'config/gameConfig';
import type { GameConfig } from 'types/config';
import type { Egg, GameState } from 'types/game';

import { moveWolf } from './movement';

/**
 * «Автопилот» для демо-режима на стартовом экране: Волк бежит к яйцу,
 * которое ближе всех к краю, но только когда оно почти скатилось — так выглядит живее.
 */
export function autopilot(state: GameState, config: GameConfig = gameConfig): GameState {
  const urgent = state.eggs
    .filter((egg) => egg.step >= config.rampSteps - 2)
    .reduce<Egg | null>((best, egg) => (!best || egg.step > best.step ? egg : best), null);

  return urgent ? moveWolf(state, urgent.chute) : state;
}
