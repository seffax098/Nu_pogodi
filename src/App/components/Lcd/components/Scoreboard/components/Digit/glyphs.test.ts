import { describe, expect, it } from 'vitest';

import { getLitSegments } from './glyphs';

describe('семисегментная цифра', () => {
  it('зажигает нужные сегменты', () => {
    expect([...getLitSegments('1')].sort()).toEqual(['b', 'c']);
    expect(getLitSegments('8').size).toBe(7);
    expect(getLitSegments(' ').size).toBe(0);
  });
});
