import styles from './Hen.module.less';

/** Хохлатка на насесте — часть «напечатанной» цветной подложки под ЖК, как у оригинала */
export const Hen = ({ y }: { y: number }) => (
  <g transform={`translate(0 ${y})`}>
    <rect className={styles.wood} x="0" y="98" width="54" height="8" rx="2" />
    <path className={styles.hay} d="M2 98 C10 90 44 90 52 98 Z" />
    <path className={styles.tail} d="M4 80 C-2 66 4 56 14 66 C12 58 20 56 24 70 Z" />
    <ellipse className={styles.body} cx="26" cy="84" rx="21" ry="14" />
    <path className={styles.wing} d="M14 82 C22 74 34 76 36 86 C28 92 18 90 14 82 Z" />
    <circle className={styles.body} cx="44" cy="68" r="9" />
    <path className={styles.comb} d="M38 60 C38 52 44 54 44 58 C46 52 52 54 50 61 Z" />
    <path className={styles.beak} d="M52 66 L60 69 L52 72 Z" />
    <circle className={styles.eye} cx="46" cy="66" r="1.6" />
  </g>
);
