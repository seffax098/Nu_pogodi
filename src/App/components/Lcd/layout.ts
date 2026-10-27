import { chuteLevel, chuteSide } from 'engine';
import type { Chute, Side } from 'types/game';

/** Координаты элементов ЖК-экрана (viewBox 640×420). Всё рисуется для левой стороны, правая — зеркало. */
export const LCD_WIDTH = 640;
export const LCD_HEIGHT = 420;

export const SIDES: readonly Side[] = ['left', 'right'];

const EGG_START_X = 62;
const EGG_STEP_X = 30;
const EGG_START_Y = 108;
const EGG_STEP_Y = 12;
const LEVEL_OFFSET_Y = 120;
const EGG_TURN_DEG = 72;

export interface EggPlacement {
  x: number;
  y: number;
  rotation: number;
}

export function eggPlacement(chute: Chute, step: number): EggPlacement {
  const baseX = EGG_START_X + step * EGG_STEP_X;
  const y = EGG_START_Y + step * EGG_STEP_Y + (chuteLevel(chute) === 'bottom' ? LEVEL_OFFSET_Y : 0);
  // Яйцо катится: на каждой позиции свой поворот сегмента
  const rotation = (step * EGG_TURN_DEG) % 360;

  return chuteSide(chute) === 'left' ? { x: baseX, y, rotation } : { x: LCD_WIDTH - baseX, y, rotation: -rotation };
}

/** Позиции убегающего цыплёнка после промаха (для левой стороны) */
export const CHICK_RUN_X = [168, 132, 96, 60, 24];
export const CRASH_Y = 392;
export const BROKEN_EGG_X = 204;

export const sideTransform = (side: Side) => (side === 'right' ? `matrix(-1 0 0 1 ${LCD_WIDTH} 0)` : undefined);
