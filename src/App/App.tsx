import { useState } from 'react';

import { isTouchDevice } from 'utils/device';

import styles from './App.module.less';
import { Device, DEVICE_HEIGHT, DEVICE_WIDTH } from './components/Device';
import { Lcd } from './components/Lcd';
import { Overlay } from './components/Overlay';
import { Stage } from './components/Stage';
import { TouchPad } from './components/TouchPad';
import { useControls, useFitScale, useGame, useKeyboard, useNow, usePressFlash, useSound } from './hooks';
import { getLcdProps } from './utils/getLcdProps';

export const App = () => {
  const { sound, muted, toggleMute } = useSound();
  const api = useGame(sound);
  const { pressed, flash } = usePressFlash();
  const { handleAction, startMode, clockOnly } = useControls({ api, sound, toggleMute, flash });
  const { scale, portrait } = useFitScale(DEVICE_WIDTH, DEVICE_HEIGHT);
  const [touch] = useState(isTouchDevice);

  const { game, demo, hiScores, isNewRecord, pause } = api;
  const idle = game.status === 'idle';
  const now = useNow(idle);

  useKeyboard(handleAction);

  const screen = (
    <>
      <Lcd {...getLcdProps(game, demo, now)} />
      {!(idle && clockOnly) && (
        <Overlay
          status={game.status}
          mode={game.mode}
          score={game.score}
          hiScores={hiScores}
          isNewRecord={isNewRecord}
          touch={touch}
          onStart={startMode}
          onResume={pause}
        />
      )}
    </>
  );

  return (
    <main className={styles.app}>
      <Stage width={DEVICE_WIDTH} height={DEVICE_HEIGHT} scale={scale}>
        <Device screen={screen} pressed={pressed} muted={muted} onPress={handleAction} />
      </Stage>
      {portrait && (
        <TouchPad pressed={pressed} muted={muted} paused={game.status === 'paused'} onPress={handleAction} />
      )}
    </main>
  );
};
