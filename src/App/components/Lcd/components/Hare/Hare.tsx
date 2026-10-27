import { HOLE_CLASS, Segment } from '../Segment';

/** Заяц выглядывает из окошка в левом верхнем углу */
export const Hare = ({ visible }: { visible: boolean }) => (
  <Segment on={visible}>
    <ellipse cx="116" cy="24" rx="5.5" ry="18" transform="rotate(-14 116 24)" />
    <ellipse cx="134" cy="24" rx="5.5" ry="18" transform="rotate(14 134 24)" />
    <ellipse cx="125" cy="48" rx="17" ry="13" />
    <circle className={HOLE_CLASS} cx="119" cy="45" r="2.6" />
    <circle className={HOLE_CLASS} cx="131" cy="45" r="2.6" />
    <path className={HOLE_CLASS} d="M121 54 L129 54 L125 58 Z" />
    <ellipse cx="108" cy="61" rx="7" ry="4" />
    <ellipse cx="142" cy="61" rx="7" ry="4" />
  </Segment>
);
