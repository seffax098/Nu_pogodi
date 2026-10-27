import { LCD_HEIGHT, SIDES, sideTransform } from '../../layout';

import { Ground } from './components/Ground';
import { HareWindow } from './components/HareWindow';
import { Hen } from './components/Hen';
import { Ramp } from './components/Ramp';
import styles from './Underlay.module.less';

const LEVELS_Y = [0, 120];

/** Цветная «напечатанная» подложка под ЖК: курятник, насесты, жёлобы */
export const Underlay = () => (
  <g className={styles.underlay}>
    <Ground />
    <HareWindow />
    <rect className={styles.scoreBoard} x="240" y="8" width="160" height="58" rx="8" />
    {SIDES.map((side) => (
      <g key={side} transform={sideTransform(side)}>
        <rect className={styles.post} x="0" y="0" width="6" height={LCD_HEIGHT} />
        {LEVELS_Y.map((y) => (
          <g key={y}>
            <Hen y={y} />
            <Ramp y={y} />
          </g>
        ))}
      </g>
    ))}
  </g>
);
