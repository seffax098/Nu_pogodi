export type SegmentName = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

export const SEGMENTS: SegmentName[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

/**
 *  aaa
 * f   b
 *  ggg
 * e   c
 *  ddd
 */
const DIGIT_GLYPHS = ['abcdef', 'bc', 'abdeg', 'abcdg', 'bcfg', 'acdfg', 'acdefg', 'abc', 'abcdefg', 'abcdfg'];
const DASH_GLYPH = 'g';

function glyphFor(char: string): string {
  if (char === '-') {
    return DASH_GLYPH;
  }
  const digit = Number.parseInt(char, 10);

  return Number.isNaN(digit) ? '' : DIGIT_GLYPHS[digit];
}

export function getLitSegments(char: string): Set<SegmentName> {
  return new Set(glyphFor(char).split('') as SegmentName[]);
}
