import { describe, expect, it } from 'vitest';

import type { GameState } from 'types/game';
import { createSeededRandom } from 'utils/random';

import { autopilot } from './autopilot';
import { startGame } from './state';
import { tick } from './tick';

describe('честная игра', () => {
  it('два яйца никогда не скатываются одновременно', () => {
    const random = createSeededRandom(42);
    let state: GameState = startGame('B');

    for (let i = 0; i < 5000 && state.status === 'playing'; i++) {
      state = tick(autopilot(state), random).state;
      const steps = state.eggs.map((egg) => egg.step);
      expect(new Set(steps).size).toBe(steps.length);
    }

    // Автопилот ловит всё, значит каждое яйцо было поймать возможно
    expect(state.misses).toBe(0);
    expect(state.score).toBeGreaterThan(300);
  });
});
