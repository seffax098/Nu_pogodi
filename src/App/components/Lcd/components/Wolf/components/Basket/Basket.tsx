import { HOLE_CLASS } from '../../../Segment';

/** Корзина: y — верхний край, у которого ловится яйцо */
export const Basket = ({ y }: { y: number }) => (
  <>
    <rect x="186" y={y - 4} width="64" height="7" rx="2" />
    <path d={`M190 ${y + 4} L246 ${y + 4} L238 ${y + 32} L198 ${y + 32} Z`} />
    <path className={HOLE_CLASS} d={`M198 ${y + 12} L238 ${y + 12} L237 ${y + 15} L199 ${y + 15} Z`} />
    <path className={HOLE_CLASS} d={`M200 ${y + 21} L236 ${y + 21} L235 ${y + 24} L201 ${y + 24} Z`} />
  </>
);
