import type { SegmentName } from './glyphs';

export const DIGIT_WIDTH = 24;
export const DIGIT_HEIGHT = 42;

const THICKNESS = 5;
const GAP = 2;
const HALF = THICKNESS / 2;
const HALF_HEIGHT = DIGIT_HEIGHT / 2;

/** Горизонтальный сегмент-шестиугольник с центром на высоте y */
function horizontal(ox: number, y: number): string {
  const left = ox + GAP;
  const right = ox + DIGIT_WIDTH - GAP;

  return `M${left} ${y} L${left + HALF} ${y - HALF} L${right - HALF} ${y - HALF} L${right} ${y} L${right - HALF} ${
    y + HALF
  } L${left + HALF} ${y + HALF} Z`;
}

/** Вертикальный сегмент-шестиугольник: центр по x, верх на y0 */
function vertical(x: number, y0: number): string {
  const top = y0 + GAP;
  const bottom = y0 + HALF_HEIGHT - GAP;

  return `M${x} ${top} L${x + HALF} ${top + HALF} L${x + HALF} ${bottom - HALF} L${x} ${bottom} L${x - HALF} ${
    bottom - HALF
  } L${x - HALF} ${top + HALF} Z`;
}

export function segmentPath(name: SegmentName, ox: number, oy: number): string {
  const right = ox + DIGIT_WIDTH - HALF;
  const left = ox + HALF;

  switch (name) {
    case 'a':
      return horizontal(ox, oy + HALF);
    case 'g':
      return horizontal(ox, oy + HALF_HEIGHT);
    case 'd':
      return horizontal(ox, oy + DIGIT_HEIGHT - HALF);
    case 'f':
      return vertical(left, oy);
    case 'b':
      return vertical(right, oy);
    case 'e':
      return vertical(left, oy + HALF_HEIGHT);
    case 'c':
      return vertical(right, oy + HALF_HEIGHT);
    default:
      return '';
  }
}
