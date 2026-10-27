import { PressButton } from 'components/PressButton';

import styles from './ServiceButton.module.less';

export interface ServiceButtonProps {
  text: string;
  pressed: boolean;
  onPress: () => void;
}

/** Серая кнопка-«таблетка» тач-пульта: режимы, пауза, звук */
export const ServiceButton = ({ text, pressed, onPress }: ServiceButtonProps) => (
  <PressButton className={styles.button} pressed={pressed} pressedClassName={styles.pressed} onPress={onPress}>
    {text}
  </PressButton>
);
