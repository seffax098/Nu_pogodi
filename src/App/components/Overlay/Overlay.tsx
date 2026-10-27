import type { GameMode, GameStatus, HiScores } from 'types/game';

import { GameOverScreen } from './components/GameOverScreen';
import { PauseScreen } from './components/PauseScreen';
import { StartScreen } from './components/StartScreen';

export interface OverlayProps {
  status: GameStatus;
  mode: GameMode;
  score: number;
  hiScores: HiScores;
  isNewRecord: boolean;
  touch: boolean;
  onStart: (mode: GameMode) => void;
  onResume: () => void;
}

/** Экран поверх ЖК для каждого состояния, кроме самой игры */
export const Overlay = ({ status, onResume, ...props }: OverlayProps) => {
  switch (status) {
    case 'idle':
      return <StartScreen {...props} />;
    case 'paused':
      return <PauseScreen touch={props.touch} onResume={onResume} />;
    case 'over':
      return <GameOverScreen {...props} />;
    default:
      return null;
  }
};
