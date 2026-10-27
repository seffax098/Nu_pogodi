import { describe, expect, it } from 'vitest';

import { gameConfig } from 'config/gameConfig';

import { getMaxEggs, getTickInterval } from './difficulty';
import { startGame } from './state';

describe('сложность', () => {
  it('игра ускоряется, но не быстрее минимального такта', () => {
    const base = startGame('A');
    const at = (score: number) => getTickInterval({ ...base, score });

    expect(at(50)).toBeLessThan(at(0));
    expect(at(100)).toBeGreaterThan(at(99)); // после сотни небольшая передышка
    expect(at(100)).toBeLessThan(at(0));
    expect(at(100000)).toBe(gameConfig.modes.A.minInterval);
  });

  it('игра Б быстрее игры А и в ней больше яиц', () => {
    expect(getTickInterval(startGame('B'))).toBeLessThan(getTickInterval(startGame('A')));
    expect(getMaxEggs(startGame('B'))).toBeGreaterThan(getMaxEggs(startGame('A')));
  });
});
