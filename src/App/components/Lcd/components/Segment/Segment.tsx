import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './Segment.module.less';

export interface SegmentProps {
  on: boolean;
  blink?: boolean;
  children: ReactNode;
}

/**
 * Сегмент ЖК: всегда присутствует на экране, но «погашенный» почти прозрачен —
 * как на настоящем жидкокристаллическом экране, где видны контуры всех фигур.
 */
export const Segment = ({ on, blink, children }: SegmentProps) => (
  <g className={cn(styles.segment, on && styles.on, blink && styles.blink)}>{children}</g>
);

/** Детали, «вырезанные» в сегменте (глаза, плетение корзины), закрашиваются цветом стекла */
export const HOLE_CLASS = styles.hole;
