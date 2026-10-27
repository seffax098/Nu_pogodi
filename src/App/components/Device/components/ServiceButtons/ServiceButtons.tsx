import { PressButton } from 'components/PressButton';
import type { ControlAction, OnControl } from 'types/controls';

import { getServiceButtons } from '../../constants';

import styles from './ServiceButtons.module.less';

export interface ServiceButtonsProps {
  pressed: ControlAction | null;
  muted: boolean;
  onPress: OnControl;
}

/** Маленькие металлические кнопки в правом верхнем углу: ИГРА А, ИГРА Б, ВРЕМЯ, ЗВУК */
export const ServiceButtons = ({ pressed, muted, onPress }: ServiceButtonsProps) => (
  <div className={styles.row}>
    {getServiceButtons(muted).map(({ action, text }) => (
      <div key={action} className={styles.item}>
        <span className={styles.label}>{text}</span>
        <PressButton
          tabIndex={-1}
          aria-label={text}
          className={styles.button}
          pressed={pressed === action}
          pressedClassName={styles.pressed}
          onPress={() => onPress(action)}
        />
      </div>
    ))}
  </div>
);
