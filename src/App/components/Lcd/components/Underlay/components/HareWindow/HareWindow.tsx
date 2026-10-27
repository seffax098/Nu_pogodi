import styles from './HareWindow.module.less';

/** Окошко, из которого выглядывает Заяц */
export const HareWindow = () => (
  <>
    <rect className={styles.glass} x="88" y="4" width="74" height="66" rx="6" />
    <path className={styles.frame} d="M88 70 L162 70 M84 72 L166 72" />
  </>
);
