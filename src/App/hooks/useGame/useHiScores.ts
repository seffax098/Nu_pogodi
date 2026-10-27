import { useCallback, useState } from 'react';

import { loadHiScores, saveHiScores } from 'storage';
import type { GameState, HiScores } from 'types/game';

/** Рекорды по режимам: читаются из localStorage, обновляются в конце партии */
export function useHiScores() {
  const [hiScores, setHiScores] = useState<HiScores>(loadHiScores);
  const [isNewRecord, setIsNewRecord] = useState(false);

  const recordResult = useCallback(
    ({ mode, score }: GameState) => {
      const record = score > hiScores[mode];
      if (record) {
        const next = { ...hiScores, [mode]: score };
        saveHiScores(next);
        setHiScores(next);
      }
      setIsNewRecord(record);
    },
    [hiScores],
  );

  const resetRecordFlag = useCallback(() => setIsNewRecord(false), []);

  return { hiScores, isNewRecord, recordResult, resetRecordFlag };
}
