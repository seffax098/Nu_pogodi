import type { ControlAction } from 'types/controls';

/**
 * Привязка клавиш к действиям. Используется KeyboardEvent.code (физическая клавиша),
 * поэтому управление работает и на русской раскладке: Q/Й, A/Ф, P/З, L/Д.
 */
export const keyBindings: Record<ControlAction, string[]> = {
  upLeft: ['KeyQ', 'KeyW', 'Numpad7'],
  downLeft: ['KeyA', 'KeyS', 'Numpad1'],
  upRight: ['KeyP', 'KeyO', 'Numpad9'],
  downRight: ['KeyL', 'KeyK', 'Numpad3'],
  left: ['ArrowLeft'],
  right: ['ArrowRight'],
  up: ['ArrowUp'],
  down: ['ArrowDown'],
  startA: ['Digit1'],
  startB: ['Digit2'],
  confirm: ['Enter', 'NumpadEnter'],
  pause: ['Space', 'Escape'],
  mute: ['KeyM'],
  clock: ['KeyT'],
};

/** Действия, которые не должны срабатывать от автоповтора зажатой клавиши */
export const noRepeatActions: ControlAction[] = ['startA', 'startB', 'confirm', 'pause', 'mute', 'clock'];
