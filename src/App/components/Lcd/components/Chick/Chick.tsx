import { HOLE_CLASS } from '../Segment';

import { chickLegs } from './chickLegs';

export interface ChickProps {
  x: number;
  y: number;
  /** Чётный и нечётный шаг по-разному ставят лапки — получается бег */
  step: number;
}

/** Цыплёнок, смотрящий влево */
export const Chick = ({ x, y, step }: ChickProps) => (
  <>
    <ellipse cx={x + 2} cy={y} rx="11" ry="8.5" />
    <circle cx={x - 8} cy={y - 10} r="6.5" />
    <path d={`M${x - 14} ${y - 12} L${x - 21} ${y - 9} L${x - 14} ${y - 7} Z`} />
    <path d={`M${x + 12} ${y - 4} L${x + 18} ${y - 9} L${x + 15} ${y + 1} Z`} />
    <circle className={HOLE_CLASS} cx={x - 9} cy={y - 12} r="1.6" />
    <path d={chickLegs(x, y, step % 2 === 0)} />
  </>
);
