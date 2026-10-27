import { describe, expect, it } from 'vitest';

import { formatClock, formatScore } from './format';

describe('форматирование для табло', () => {
  it('гасит незначащие нули и переполняется как настоящее табло', () => {
    expect(formatScore(0)).toBe('   0');
    expect(formatScore(42)).toBe('  42');
    expect(formatScore(12345)).toBe('2345');
  });

  it('показывает время', () => {
    expect(formatClock(new Date(2026, 9, 16, 9, 5))).toBe(' 905');
    expect(formatClock(new Date(2026, 9, 16, 21, 30))).toBe('2130');
  });
});
