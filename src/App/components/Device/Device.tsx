import type { ReactNode } from 'react';

import type { ControlAction, OnControl } from 'types/controls';

import { Bezel } from './components/Bezel';
import { BigButton } from './components/BigButton';
import { ServiceButtons } from './components/ServiceButtons';
import { BIG_BUTTONS, DEVICE_HEIGHT, DEVICE_WIDTH } from './constants';
import styles from './Device.module.less';

export interface DeviceProps {
  screen: ReactNode;
  pressed: ControlAction | null;
  muted: boolean;
  onPress: OnControl;
}

/** Корпус «Электроники ИМ-02» фиксированного размера; масштабируется снаружи */
export const Device = ({ screen, pressed, muted, onPress }: DeviceProps) => (
  <div className={styles.device} style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }}>
    <div className={styles.faceplate}>
      <div className={styles.brand}>ЭЛЕКТРОНИКА</div>
      <ServiceButtons pressed={pressed} muted={muted} onPress={onPress} />
      <Bezel>{screen}</Bezel>
      {BIG_BUTTONS.map((button) => (
        <BigButton key={button.action} {...button} pressed={pressed === button.action} onPress={onPress} />
      ))}
      <div className={styles.stripe} />
      <div className={styles.model}>ИМ-02</div>
    </div>
  </div>
);
