import { describe, expect, it } from 'vitest';

import type { GameState } from 'types/game';

import { startGame } from '../state';
import { calmConfig, LAST_STEP, never, withEggAtEdge } from '../testing/fixtures';

import { tick } from './tick';

describe('tick: ловля яиц', () => {
  it('яйцо, скатившееся в корзину, приносит очко', () => {
    const { state, events } = tick(withEggAtEdge({ wolf: 0 }), never, calmConfig);

    expect(state.score).toBe(1);
    expect(state.misses).toBe(0);
    expect(state.eggs).toHaveLength(0);
    expect(events).toContainEqual({ type: 'catch' });
  });

  it('яйцо мимо корзины — полный промах, жёлобы очищаются', () => {
    const start = {
      ...withEggAtEdge({ wolf: 3 }),
      eggs: [
        { id: 1, chute: 0 as const, step: LAST_STEP },
        { id: 2, chute: 2 as const, step: 1 },
      ],
    };
    const { state, events } = tick(start, never, calmConfig);

    expect(state.score).toBe(0);
    expect(state.misses).toBe(2);
    expect(state.eggs).toHaveLength(0);
    expect(state.crash).toEqual({ side: 'left', frame: 0 });
    expect(events).toContainEqual({ type: 'miss', half: false });
  });

  it('при Зайце промах считается за половинку', () => {
    const { state, events } = tick(withEggAtEdge({ wolf: 1, hare: true }), never, calmConfig);

    expect(state.misses).toBe(1);
    expect(events).toContainEqual({ type: 'miss', half: true });
  });

  it('третий промах завершает игру', () => {
    const { state, events } = tick(withEggAtEdge({ wolf: 2, misses: 4 }), never, calmConfig);

    expect(state.status).toBe('over');
    expect(events).toContainEqual({ type: 'gameOver' });
  });

  it('на 200 очках все промахи прощаются', () => {
    const { state, events } = tick(withEggAtEdge({ wolf: 0, score: 199, misses: 3 }), never, calmConfig);

    expect(state.score).toBe(200);
    expect(state.misses).toBe(0);
    expect(events).toContainEqual({ type: 'bonus' });
  });

  it('пока цыплёнок убегает, яйца не катятся', () => {
    let state: GameState = { ...startGame('A'), crash: { side: 'left', frame: 0 } };
    for (let i = 0; i < calmConfig.crashFrames; i++) {
      state = tick(state, never, calmConfig).state;
    }

    expect(state.crash).toBeNull();
  });
});
