import type { Note } from 'types/sound';

export const SOUND_VOLUME = 0.05;

/** У каждого жёлоба свой тон — по звуку слышно, откуда катится яйцо */
export const STEP_TONES = [1046, 784, 1318, 880];
export const STEP_TONE_MS = 35;

/** Задержка мелодии конца игры, чтобы она не наложилась на звук промаха */
export const GAME_OVER_DELAY_MS = 480;

export const MELODIES = {
  start: [
    [523, 90],
    [659, 90],
    [784, 90],
    [1046, 160],
  ],
  catch: [
    [1568, 40],
    [2093, 50],
  ],
  hare: [
    [1760, 30],
    [0, 30],
    [1760, 30],
  ],
  bonus: [
    [784, 70],
    [988, 70],
    [1175, 70],
    [1568, 70],
    [1175, 70],
    [1568, 180],
  ],
  miss: [
    [440, 120],
    [330, 120],
    [220, 220],
  ],
  gameOver: [
    [523, 160],
    [0, 40],
    [392, 160],
    [0, 40],
    [330, 160],
    [262, 420],
  ],
} satisfies Record<string, Note[]>;
