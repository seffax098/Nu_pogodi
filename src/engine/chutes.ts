import type { Chute, Level, Side } from 'types/game';

export const CHUTES: readonly Chute[] = [0, 1, 2, 3];

export const chuteSide = (chute: Chute): Side => (chute < 2 ? 'left' : 'right');

export const chuteLevel = (chute: Chute): Level => (chute % 2 === 0 ? 'top' : 'bottom');

export const toChute = (side: Side, level: Level): Chute =>
  ((side === 'left' ? 0 : 2) + (level === 'top' ? 0 : 1)) as Chute;
