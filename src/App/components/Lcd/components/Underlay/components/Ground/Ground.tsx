import styles from './Ground.module.less';

const BLADES =
  'M10 404 l4 -8 l2 8 M80 404 l3 -7 l3 7 M150 404 l4 -9 l2 9 M440 404 l3 -8 l3 8 M520 404 l4 -7 l2 7 M610 404 l3 -9 l3 9';

/** Травка внизу экрана */
export const Ground = () => (
  <>
    <rect className={styles.grass} x="0" y="402" width="640" height="18" />
    <path className={styles.blades} d={BLADES} />
  </>
);
