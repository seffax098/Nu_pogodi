import { gameConfig } from 'config/gameConfig';
import type { GameMode, HiScores } from 'types/game';

import { Hint } from '../Hint';
import { ModeButtons } from '../ModeButtons';
import { ScreenPanel } from '../ScreenPanel';

import styles from './GameOverScreen.module.less';

export interface GameOverScreenProps {
  mode: GameMode;
  score: number;
  hiScores: HiScores;
  isNewRecord: boolean;
  touch: boolean;
  onStart: (mode: GameMode) => void;
}

export const GameOverScreen = ({ mode, score, hiScores, isNewRecord, touch, onStart }: GameOverScreenProps) => {
  const { title } = gameConfig.modes[mode];

  return (
    <ScreenPanel title="ИГРА ОКОНЧЕНА">
      <p className={styles.score}>{score}</p>
      <p>{isNewRecord ? '★ НОВЫЙ РЕКОРД! ★' : `рекорд ${title}: ${hiScores[mode]}`}</p>
      <p>Три цыплёнка сбежали — Волк остался без яичницы.</p>
      <ModeButtons hiScores={hiScores} onStart={onStart} />
      {!touch && (
        <Hint>
          <kbd>Enter</kbd> — ещё раз в {title}
        </Hint>
      )}
    </ScreenPanel>
  );
};
