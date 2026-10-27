import type { GameState } from 'types/game';
import { formatClock, formatScore } from 'utils/format';

import type { LcdProps } from '../components/Lcd';

/** На стартовом экране ЖК показывает демо и часы, в игре — партию и счёт */
export function getLcdProps(game: GameState, demo: GameState, now: Date): LcdProps {
  const idle = game.status === 'idle';
  const view = idle ? demo : game;

  return {
    wolf: view.wolf,
    eggs: view.eggs,
    crash: view.crash,
    hare: view.hare,
    misses: idle ? 0 : view.misses,
    digits: idle ? formatClock(now) : formatScore(view.score),
    colon: idle && now.getSeconds() % 2 === 0,
    mode: idle ? null : view.mode,
  };
}
