import { PressButton } from 'components/PressButton';

import styles from './PadButton.module.less';

export interface PadButtonProps {
  arrow: string;
  label: string;
  pressed: boolean;
  onPress: () => void;
}

/** Крупная красная кнопка тач-пульта со стрелкой */
export const PadButton = ({ arrow, label, pressed, onPress }: PadButtonProps) => (
  <PressButton
    aria-label={label}
    className={styles.button}
    pressed={pressed}
    pressedClassName={styles.pressed}
    onPress={onPress}
  >
    {arrow}
  </PressButton>
);
