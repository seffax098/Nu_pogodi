import { gameConfig } from 'config/gameConfig';
import type { GameMode } from 'types/game';

import { Segment } from '../Segment';

import styles from './ModeLabels.module.less';

const LABELS: { mode: GameMode; y: number }[] = [
  { mode: 'A', y: 34 },
  { mode: 'B', y: 54 },
];

/** Надписи «ИГРА А» / «ИГРА Б» рядом с табло — горит текущий режим */
export const ModeLabels = ({ mode }: { mode: GameMode | null }) => (
  <>
    {LABELS.map(({ mode: labelMode, y }) => (
      <Segment key={labelMode} on={mode === labelMode}>
        <text className={styles.label} x="174" y={y}>
          {gameConfig.modes[labelMode].title}
        </text>
      </Segment>
    ))}
  </>
);
