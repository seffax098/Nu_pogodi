import { gameConfig } from 'config/gameConfig';
import type { GameConfig } from 'types/config';
import type { GameState } from 'types/game';

import { startGame } from '../state';

/** Конфиг без случайностей: Заяц не появляется, новые яйца не падают */
export const calmConfig: GameConfig = {
  ...gameConfig,
  hare: { appearChance: 0, hideChance: 0 },
  modes: {
    A: { ...gameConfig.modes.A, spawnChance: 0 },
    B: { ...gameConfig.modes.B, spawnChance: 0 },
  },
};

export const LAST_STEP = gameConfig.rampSteps - 1;

/** «Кубик», который никогда не выпадает: ни Зайца, ни новых яиц */
export const never = () => 0.99;

export function withEggAtEdge(overrides: Partial<GameState> = {}): GameState {
  return { ...startGame('A'), eggs: [{ id: 1, chute: 0, step: LAST_STEP }], ...overrides };
}
