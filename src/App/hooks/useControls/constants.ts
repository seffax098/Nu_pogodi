import type { ControlAction, MoveAction } from 'types/controls';
import type { Chute, Direction, GameMode } from 'types/game';

export const CHUTE_BY_ACTION: Record<MoveAction, Chute> = { upLeft: 0, downLeft: 1, upRight: 2, downRight: 3 };

export const DIRECTION_BY_ACTION: Partial<Record<ControlAction, Direction>> = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down',
};

export const MODE_BY_ACTION: Partial<Record<ControlAction, GameMode>> = { startA: 'A', startB: 'B' };

export const isMoveAction = (action: ControlAction): action is MoveAction => action in CHUTE_BY_ACTION;
