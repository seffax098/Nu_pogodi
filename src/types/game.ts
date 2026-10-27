export type Chute = 0 | 1 | 2 | 3;

export type Side = 'left' | 'right';
export type Level = 'top' | 'bottom';
export type Direction = 'left' | 'right' | 'up' | 'down';

export type GameMode = 'A' | 'B';
export type GameStatus = 'idle' | 'playing' | 'paused' | 'over';

export interface Egg {
  id: number;
  chute: Chute;
  /** Позиция на жёлобе */
  step: number;
}

export interface Crash {
  side: Side;
  /** Кадр анимации: 0 — разбитое яйцо, дальше цыплёнок убегает */
  frame: number;
}

export interface GameState {
  status: GameStatus;
  mode: GameMode;
  /** Жёлоб, у которого Волк держит корзину */
  wolf: Chute;
  eggs: Egg[];
  score: number;
  /** Промахи в «половинках»: обычный промах = 2, при Зайце = 1 */
  misses: number;
  hare: boolean;
  crash: Crash | null;
  ticks: number;
  lastSpawnTick: number;
  nextEggId: number;
}

export type GameEvent =
  | { type: 'step'; chute: Chute }
  | { type: 'catch' }
  | { type: 'miss'; half: boolean }
  | { type: 'bonus' }
  | { type: 'hare' }
  | { type: 'gameOver' };

export interface TickResult {
  state: GameState;
  events: GameEvent[];
}

export type RandomFn = () => number;

export type HiScores = Record<GameMode, number>;
