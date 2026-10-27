import type { ControlAction, MoveAction } from 'types/controls';

export const PAD_BUTTONS: { action: MoveAction; arrow: string; label: string }[] = [
  { action: 'upLeft', arrow: '↖', label: 'Влево вверх' },
  { action: 'upRight', arrow: '↗', label: 'Вправо вверх' },
  { action: 'downLeft', arrow: '↙', label: 'Влево вниз' },
  { action: 'downRight', arrow: '↘', label: 'Вправо вниз' },
];

export const getServiceButtons = (muted: boolean, paused: boolean): { action: ControlAction; text: string }[] => [
  { action: 'startA', text: 'ИГРА А' },
  { action: 'startB', text: 'ИГРА Б' },
  { action: 'pause', text: paused ? 'ДАЛЬШЕ' : 'ПАУЗА' },
  { action: 'mute', text: muted ? 'ЗВУК ✕' : 'ЗВУК' },
];
