import type { HiScores } from 'types/game';
import { readStorage, writeStorage } from 'utils/storage';

const HI_SCORES_KEY = 'nu-pogodi:hi-scores';

export function loadHiScores(): HiScores {
  try {
    const parsed = JSON.parse(readStorage(HI_SCORES_KEY) ?? '{}');

    return { A: Number(parsed.A) || 0, B: Number(parsed.B) || 0 };
  } catch {
    return { A: 0, B: 0 };
  }
}

export function saveHiScores(scores: HiScores) {
  writeStorage(HI_SCORES_KEY, JSON.stringify(scores));
}
