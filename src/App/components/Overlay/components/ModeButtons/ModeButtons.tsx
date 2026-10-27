import { gameConfig } from 'config/gameConfig';
import type { GameMode, HiScores } from 'types/game';

import styles from './ModeButtons.module.less';

const MODES: { mode: GameMode; key: string }[] = [
  { mode: 'A', key: '1' },
  { mode: 'B', key: '2' },
];

export interface ModeButtonsProps {
  hiScores: HiScores;
  onStart: (mode: GameMode) => void;
}

/** Выбор режима с описанием и рекордом */
export const ModeButtons = ({ hiScores, onStart }: ModeButtonsProps) => (
  <div className={styles.modes}>
    {MODES.map(({ mode, key }) => (
      <button key={mode} type="button" className={styles.button} onClick={() => onStart(mode)}>
        <span className={styles.key}>{key}</span>
        <span>
          {gameConfig.modes[mode].title}
          <small>{gameConfig.modes[mode].description}</small>
          <small>рекорд: {hiScores[mode]}</small>
        </span>
      </button>
    ))}
  </div>
);
