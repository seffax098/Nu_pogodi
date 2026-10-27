import type { ReactNode } from 'react';

import styles from './Bezel.module.less';

/** Чёрная рамка вокруг ЖК с надписью «НУ, ПОГОДИ!» и бликом на стекле */
export const Bezel = ({ children }: { children: ReactNode }) => (
  <div className={styles.bezel}>
    <div className={styles.title}>НУ, ПОГОДИ!</div>
    <div className={styles.screen}>{children}</div>
  </div>
);
