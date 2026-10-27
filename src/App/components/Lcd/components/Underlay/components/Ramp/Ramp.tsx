import styles from './Ramp.module.less';

/** Деревянный жёлоб, по которому катятся яйца */
export const Ramp = ({ y }: { y: number }) => (
  <g transform={`translate(0 ${y})`}>
    <path className={styles.ramp} d="M24 104 L202 175 L202 182 L24 111 Z" />
    <path className={styles.edge} d="M24 111 L202 182" />
  </g>
);
