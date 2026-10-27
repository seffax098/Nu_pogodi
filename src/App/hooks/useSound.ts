import { useCallback, useState } from 'react';

import { PiezoSound } from 'audio';
import { loadMuted, saveMuted } from 'storage';

/** Один синтезатор на всё приложение; настройка «без звука» запоминается */
export function useSound() {
  const [sound] = useState(() => {
    const piezo = new PiezoSound();
    piezo.muted = loadMuted();

    return piezo;
  });
  const [muted, setMuted] = useState(sound.muted);

  const toggleMute = useCallback(() => {
    sound.muted = !sound.muted;
    saveMuted(sound.muted);
    setMuted(sound.muted);
  }, [sound]);

  return { sound, muted, toggleMute };
}
