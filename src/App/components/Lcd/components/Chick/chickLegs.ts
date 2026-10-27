type Point = [number, number];

const toPath = (points: Point[]) => `M${points.map(([px, py]) => `${px} ${py}`).join(' L')} Z`;

/** Лапки цыплёнка: в беге расставлены, в шаге — вместе */
export function chickLegs(x: number, y: number, spread: boolean): string {
  const legs: Point[][] = spread
    ? [
        [
          [x - 3, y + 6],
          [x - 9, y + 15],
          [x - 6, y + 16],
          [x, y + 7],
        ],
        [
          [x + 5, y + 6],
          [x + 11, y + 15],
          [x + 8, y + 16],
          [x + 2, y + 7],
        ],
      ]
    : [
        [
          [x - 1, y + 6],
          [x - 3, y + 16],
          [x, y + 16],
          [x + 2, y + 7],
        ],
        [
          [x + 3, y + 6],
          [x + 5, y + 16],
          [x + 8, y + 16],
          [x + 6, y + 7],
        ],
      ];

  return legs.map(toPath).join(' ');
}
