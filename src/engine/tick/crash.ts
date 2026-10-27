import type { GameConfig } from 'types/config';
import type { Crash } from 'types/game';

export function advanceCrash(crash: Crash, config: GameConfig): Crash | null {
  const frame = crash.frame + 1;

  return frame >= config.crashFrames ? null : { ...crash, frame };
}
