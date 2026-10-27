import type { ReactNode } from 'react';

import styles from './Stage.module.less';

export interface StageProps {
  width: number;
  height: number;
  scale: number;
  children: ReactNode;
}

export const Stage = ({ width, height, scale, children }: StageProps) => (
  <div className={styles.stage} style={{ width: width * scale, height: height * scale }}>
    <div className={styles.scaler} style={{ transform: `scale(${scale})` }}>
      {children}
    </div>
  </div>
);
