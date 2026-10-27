import { Chick } from '../Chick';
import { Segment } from '../Segment';

const ICONS_X = [474, 520, 566];
const ICON_Y = 30;

/** Три иконки промахов. Половинка (промах при Зайце) мигает. */
export const Misses = ({ misses }: { misses: number }) => (
  <>
    {ICONS_X.map((x, index) => {
      const halves = misses - index * 2;

      return (
        <Segment key={x} on={halves > 0} blink={halves === 1}>
          <g transform={`matrix(-1 0 0 1 ${2 * x} 0)`}>
            <Chick x={x} y={ICON_Y} step={1} />
          </g>
        </Segment>
      );
    })}
  </>
);
