import { gameConfig } from 'config/gameConfig';
import { CHUTES } from 'engine';
import type { Egg } from 'types/game';

import { eggPlacement } from '../../layout';
import { Segment } from '../Segment';

const STEPS = Array.from({ length: gameConfig.rampSteps }, (_, step) => step);

/** 20 сегментов яиц: 4 жёлоба × 5 позиций */
export const Eggs = ({ eggs }: { eggs: Egg[] }) => (
  <>
    {CHUTES.map((chute) =>
      STEPS.map((step) => {
        const { x, y, rotation } = eggPlacement(chute, step);
        const on = eggs.some((egg) => egg.chute === chute && egg.step === step);

        return (
          <Segment key={`${chute}-${step}`} on={on}>
            <ellipse cx={x} cy={y} rx="8" ry="10.5" transform={`rotate(${rotation} ${x} ${y})`} />
          </Segment>
        );
      }),
    )}
  </>
);
