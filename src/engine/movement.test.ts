import { describe, expect, it } from 'vitest';

import { moveWolf, moveWolfRelative } from './movement';
import { startGame, togglePause } from './state';
import { calmConfig, never, withEggAtEdge } from './testing/fixtures';
import { tick } from './tick';

describe('управление и состояния', () => {
  it('стрелки двигают корзину относительно текущего положения', () => {
    const state = startGame('A'); // корзина слева вверху

    expect(moveWolfRelative(state, 'down').wolf).toBe(1);
    expect(moveWolfRelative(state, 'right').wolf).toBe(2);
    expect(moveWolfRelative(moveWolfRelative(state, 'right'), 'down').wolf).toBe(3);
  });

  it('на паузе время стоит, а Волк не двигается', () => {
    const paused = togglePause(withEggAtEdge());

    expect(paused.status).toBe('paused');
    expect(tick(paused, never, calmConfig).state).toBe(paused);
    expect(moveWolf(paused, 3)).toBe(paused);
    expect(togglePause(paused).status).toBe('playing');
  });
});
