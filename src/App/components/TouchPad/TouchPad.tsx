import type { ControlAction, OnControl } from 'types/controls';

import { PadButton } from './components/PadButton';
import { ServiceButton } from './components/ServiceButton';
import { getServiceButtons, PAD_BUTTONS } from './constants';
import styles from './TouchPad.module.less';

export interface TouchPadProps {
  pressed: ControlAction | null;
  muted: boolean;
  paused: boolean;
  onPress: OnControl;
}

/** Крупный пульт для телефона в портретной ориентации: кнопки на корпусе там слишком мелкие */
export const TouchPad = ({ pressed, muted, paused, onPress }: TouchPadProps) => (
  <div className={styles.pad}>
    <div className={styles.service}>
      {getServiceButtons(muted, paused).map(({ action, text }) => (
        <ServiceButton key={action} text={text} pressed={pressed === action} onPress={() => onPress(action)} />
      ))}
    </div>
    <div className={styles.grid}>
      {PAD_BUTTONS.map(({ action, arrow, label }) => (
        <PadButton
          key={action}
          arrow={arrow}
          label={label}
          pressed={pressed === action}
          onPress={() => onPress(action)}
        />
      ))}
    </div>
  </div>
);
