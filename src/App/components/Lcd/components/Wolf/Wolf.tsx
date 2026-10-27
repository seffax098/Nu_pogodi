import { chuteLevel, chuteSide } from 'engine';
import type { Chute, Level } from 'types/game';

import { SIDES, sideTransform } from '../../layout';
import { Segment } from '../Segment';

import { WolfArm } from './components/WolfArm';
import { WolfBody } from './components/WolfBody';

const LEVELS: Level[] = ['top', 'bottom'];

/** Четыре позы Волка: два тела (влево/вправо) × две руки (вверх/вниз) */
export const Wolf = ({ wolf }: { wolf: Chute }) => (
  <>
    {SIDES.map((side) => {
      const facing = chuteSide(wolf) === side;

      return (
        <g key={side} transform={sideTransform(side)}>
          <Segment on={facing}>
            <WolfBody />
          </Segment>
          {LEVELS.map((level) => (
            <Segment key={level} on={facing && chuteLevel(wolf) === level}>
              <WolfArm level={level} />
            </Segment>
          ))}
        </g>
      );
    })}
  </>
);
