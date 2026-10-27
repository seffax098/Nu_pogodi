import type { Level } from 'types/game';

import { Basket } from '../Basket';

const ARMS: Record<Level, { arm: string; handY: number; basketY: number }> = {
  top: {
    arm: 'M306 226 C282 222 256 212 236 194 L228 202 C250 222 280 236 304 240 Z',
    handY: 196,
    basketY: 186,
  },
  bottom: {
    arm: 'M306 234 C286 254 262 284 238 300 L230 292 C254 274 278 246 300 224 Z',
    handY: 300,
    basketY: 306,
  },
};

/** Рука с корзиной у верхнего или нижнего жёлоба */
export const WolfArm = ({ level }: { level: Level }) => {
  const { arm, handY, basketY } = ARMS[level];

  return (
    <>
      <path d={arm} />
      <circle cx="232" cy={handY} r="9" />
      <Basket y={basketY} />
    </>
  );
};
