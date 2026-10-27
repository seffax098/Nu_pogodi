import { useState } from 'react';

import type { PiezoSound } from 'audio';
import type { ControlAction } from 'types/controls';
import type { GameMode } from 'types/game';

import type { GameApi } from '../useGame';

import { CHUTE_BY_ACTION, DIRECTION_BY_ACTION, isMoveAction, MODE_BY_ACTION } from './constants';

export interface ControlsOptions {
  api: GameApi;
  sound: PiezoSound;
  toggleMute: () => void;
  flash: (action: ControlAction) => void;
}

/** Переводит нажатия (клавиатура, кнопки корпуса, тач-пульт) в действия игры с учётом её состояния */
export function useControls({ api, sound, toggleMute, flash }: ControlsOptions) {
  const [clockOnly, setClockOnly] = useState(false);
  const { status, mode } = api.game;

  const startMode = (next: GameMode) => {
    setClockOnly(false);
    api.start(next);
  };

  // Enter: продолжить с паузы или сыграть ещё раз
  const confirm = () => {
    if (status === 'paused') {
      api.pause();
    } else if (status !== 'playing') {
      startMode(mode);
    }
  };

  // Пробел: в меню и после проигрыша — старт, в игре — пауза
  const togglePause = () => {
    if (status === 'idle' || status === 'over') {
      startMode(mode);
    } else {
      api.pause();
    }
  };

  // «ВРЕМЯ»: из меню прячет панель, оставляя часы и демо; в игре не действует
  const toggleClock = () => {
    if (status === 'over') {
      api.toMenu();
    }
    if (status !== 'playing') {
      setClockOnly((value) => !value);
    }
  };

  const simpleActions: Partial<Record<ControlAction, () => void>> = {
    confirm,
    pause: togglePause,
    clock: toggleClock,
    mute: toggleMute,
  };

  const handleAction = (action: ControlAction) => {
    sound.unlock();
    flash(action);

    if (isMoveAction(action)) {
      if (status === 'paused') {
        api.pause();
      }
      api.move(CHUTE_BY_ACTION[action]);

      return;
    }

    const direction = DIRECTION_BY_ACTION[action];
    const nextMode = MODE_BY_ACTION[action];
    if (direction) {
      api.moveRelative(direction);
    } else if (nextMode) {
      startMode(nextMode);
    } else {
      simpleActions[action]?.();
    }
  };

  return { handleAction, startMode, clockOnly };
}
