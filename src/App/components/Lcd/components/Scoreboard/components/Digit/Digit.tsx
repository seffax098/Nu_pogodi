import { Segment } from '../../../Segment';

import { getLitSegments, SEGMENTS } from './glyphs';
import { DIGIT_HEIGHT, segmentPath } from './segmentPath';

const SKEW = -6;
const SKEW_SHIFT = Math.tan((-SKEW * Math.PI) / 180);

/** Семисегментная цифра с лёгким наклоном, как на табло «Электроники» */
export const Digit = ({ char, x, y }: { char: string; x: number; y: number }) => {
  const lit = getLitSegments(char);

  return (
    <g transform={`skewX(${SKEW}) translate(${(y + DIGIT_HEIGHT) * SKEW_SHIFT} 0)`}>
      {SEGMENTS.map((name) => (
        <Segment key={name} on={lit.has(name)}>
          <path d={segmentPath(name, x, y)} />
        </Segment>
      ))}
    </g>
  );
};
