import type { Chute, Crash, Egg, GameMode } from 'types/game';

import { CrashScene } from './components/CrashScene';
import { Eggs } from './components/Eggs';
import { Hare } from './components/Hare';
import { LcdDefs } from './components/LcdDefs';
import { Misses } from './components/Misses';
import { ModeLabels } from './components/ModeLabels';
import { Scoreboard } from './components/Scoreboard';
import { Underlay } from './components/Underlay';
import { Wolf } from './components/Wolf';
import { LCD_HEIGHT, LCD_WIDTH } from './layout';
import styles from './Lcd.module.less';

export interface LcdProps {
  wolf: Chute;
  eggs: Egg[];
  crash: Crash | null;
  hare: boolean;
  /** Промахи в половинках */
  misses: number;
  /** Четыре символа для семисегментного табло */
  digits: string;
  colon: boolean;
  mode: GameMode | null;
}

export const Lcd = ({ wolf, eggs, crash, hare, misses, digits, colon, mode }: LcdProps) => (
  <svg
    className={styles.lcd}
    viewBox={`0 0 ${LCD_WIDTH} ${LCD_HEIGHT}`}
    role="img"
    aria-label={`Счёт ${digits.trim() || 0}`}
  >
    <LcdDefs />
    <rect className={styles.glass} width={LCD_WIDTH} height={LCD_HEIGHT} fill="url(#lcdGlass)" />
    <Underlay />

    <g className={styles.ink}>
      <Hare visible={hare} />
      <Scoreboard digits={digits} colon={colon} />
      <Misses misses={misses} />
      <ModeLabels mode={mode} />
      <Eggs eggs={eggs} />
      <Wolf wolf={wolf} />
      <CrashScene crash={crash} />
    </g>
  </svg>
);
