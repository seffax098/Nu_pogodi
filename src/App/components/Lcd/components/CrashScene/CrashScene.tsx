import type { Crash } from 'types/game';

import { BROKEN_EGG_X, CHICK_RUN_X, CRASH_Y, SIDES, sideTransform } from '../../layout';
import { Chick } from '../Chick';
import { Segment } from '../Segment';

import { BrokenEgg } from './components/BrokenEgg';

/** Промах: яйцо разбивается, и из него убегает цыплёнок (кадр 0 — скорлупа, дальше бег) */
export const CrashScene = ({ crash }: { crash: Crash | null }) => (
  <>
    {SIDES.map((side) => {
      const frame = crash?.side === side ? crash.frame : null;

      return (
        <g key={side} transform={sideTransform(side)}>
          <Segment on={frame !== null && frame <= 1}>
            <BrokenEgg x={BROKEN_EGG_X} y={CRASH_Y} />
          </Segment>
          {CHICK_RUN_X.map((x, index) => (
            <Segment key={x} on={frame !== null && frame - 1 === index}>
              <Chick x={x} y={CRASH_Y} step={index} />
            </Segment>
          ))}
        </g>
      );
    })}
  </>
);
