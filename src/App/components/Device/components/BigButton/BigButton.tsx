import cn from 'classnames';

import { PressButton } from 'components/PressButton';
import type { MoveAction } from 'types/controls';

import styles from './BigButton.module.less';

export interface BigButtonProps {
  action: MoveAction;
  label: string;
  arrow: string;
  pressed: boolean;
  onPress: (action: MoveAction) => void;
}

/** Большая красная кнопка у края корпуса; положение задаётся классом по имени действия */
export const BigButton = ({ action, label, arrow, pressed, onPress }: BigButtonProps) => (
  <div className={cn(styles.wrap, styles[action])}>
    <PressButton
      tabIndex={-1}
      aria-label={label}
      className={styles.button}
      pressed={pressed}
      pressedClassName={styles.pressed}
      onPress={() => onPress(action)}
    />
    <span className={styles.arrow}>{arrow}</span>
  </div>
);
