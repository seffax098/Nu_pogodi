import { Segment } from '../Segment';

import { Digit, DIGIT_WIDTH } from './components/Digit';

const DIGITS_X = 258;
const DIGITS_Y = 16;
const DIGIT_GAP = 6;
const COLON_GAP = 10;

export interface ScoreboardProps {
  /** Четыре символа: счёт или время */
  digits: string;
  colon: boolean;
}

/** Табло «88:88»: между второй и третьей цифрой место для двоеточия часов */
export const Scoreboard = ({ digits, colon }: ScoreboardProps) => (
  <>
    {digits.split('').map((char, index) => {
      const x = DIGITS_X + index * (DIGIT_WIDTH + DIGIT_GAP) + (index >= 2 ? COLON_GAP : 0);

      return <Digit key={index} char={char} x={x} y={DIGITS_Y} />;
    })}
    <Segment on={colon}>
      <rect x="317" y="27" width="5" height="5" />
      <rect x="315" y="43" width="5" height="5" />
    </Segment>
  </>
);
