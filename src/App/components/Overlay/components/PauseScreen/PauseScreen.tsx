import { ScreenPanel } from '../ScreenPanel';

export interface PauseScreenProps {
  touch: boolean;
  onResume: () => void;
}

export const PauseScreen = ({ touch, onResume }: PauseScreenProps) => (
  <ScreenPanel title="ПАУЗА" onClick={onResume}>
    <p>{touch ? 'Коснитесь, чтобы продолжить' : 'Пробел — продолжить'}</p>
  </ScreenPanel>
);
