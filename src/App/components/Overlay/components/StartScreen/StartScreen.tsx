import type { GameMode, HiScores } from 'types/game';

import { Hint } from '../Hint';
import { ModeButtons } from '../ModeButtons';
import { ScreenPanel } from '../ScreenPanel';

export interface StartScreenProps {
  hiScores: HiScores;
  touch: boolean;
  onStart: (mode: GameMode) => void;
}

export const StartScreen = ({ hiScores, touch, onStart }: StartScreenProps) => (
  <ScreenPanel title="Ну, погоди!" logo>
    <p>
      Куры несутся без остановки. Помогите Волку поймать все яйца в корзину — три разбитых, и игра окончена. Когда
      выглядывает Заяц, промах считается за половинку.
    </p>
    <ModeButtons hiScores={hiScores} onStart={onStart} />
    {touch ? (
      <Hint>Жмите на красные кнопки, чтобы двигать корзину</Hint>
    ) : (
      <Hint>
        Корзина: <kbd>Q</kbd> <kbd>A</kbd> <kbd>P</kbd> <kbd>L</kbd> или стрелки · пауза <kbd>Пробел</kbd> · звук{' '}
        <kbd>M</kbd>
      </Hint>
    )}
  </ScreenPanel>
);
