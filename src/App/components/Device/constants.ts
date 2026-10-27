import type { ControlAction, MoveAction } from 'types/controls';

export const DEVICE_WIDTH = 1000;
export const DEVICE_HEIGHT = 640;

export const BIG_BUTTONS: { action: MoveAction; label: string; arrow: string }[] = [
  { action: 'upLeft', label: 'Корзину влево вверх', arrow: '↖' },
  { action: 'downLeft', label: 'Корзину влево вниз', arrow: '↙' },
  { action: 'upRight', label: 'Корзину вправо вверх', arrow: '↗' },
  { action: 'downRight', label: 'Корзину вправо вниз', arrow: '↘' },
];

export const getServiceButtons = (muted: boolean): { action: ControlAction; text: string }[] => [
  { action: 'startA', text: 'ИГРА А' },
  { action: 'startB', text: 'ИГРА Б' },
  { action: 'clock', text: 'ВРЕМЯ' },
  { action: 'mute', text: muted ? 'ЗВУК ✕' : 'ЗВУК' },
];
