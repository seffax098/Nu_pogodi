import type { RandomFn } from 'types/game';

/** Детерминированный генератор (mulberry32) — нужен тестам для воспроизводимых партий */
export function createSeededRandom(seed: number): RandomFn {
  let value = seed >>> 0; // eslint-disable-line no-bitwise

  return () => {
    /* eslint-disable no-bitwise */
    value = (value + 0x6d2b79f5) >>> 0;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    /* eslint-enable no-bitwise */
  };
}
