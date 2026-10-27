export type MoveAction = 'upLeft' | 'downLeft' | 'upRight' | 'downRight';

export type ControlAction =
  | MoveAction
  | 'left'
  | 'right'
  | 'up'
  | 'down'
  | 'startA'
  | 'startB'
  | 'confirm'
  | 'pause'
  | 'mute'
  | 'clock';

export type OnControl = (action: ControlAction) => void;
