import type { ReactNode } from 'react';

import styles from './Hint.module.less';

/** Мелкая подсказка под панелью; внутри можно использовать <kbd> для клавиш */
export const Hint = ({ children }: { children: ReactNode }) => <p className={styles.hint}>{children}</p>;
