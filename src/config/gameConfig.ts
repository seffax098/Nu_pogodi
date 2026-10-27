import type { GameConfig } from 'types/config';

/**
 * Все «крутилки» игры: скорость, сложность, правила бонусов.
 * Движок не содержит магических чисел и принимает конфиг параметром, поэтому в тестах легко подсунуть свой.
 */
export const gameConfig: GameConfig = {
  rampSteps: 5,
  maxMissHalves: 6,
  bonusScores: [200, 500],
  crashFrames: 6,
  hare: {
    appearChance: 0.035,
    hideChance: 0.09,
  },
  modes: {
    A: {
      title: 'ИГРА А',
      description: 'для разминки',
      startInterval: 560,
      minInterval: 210,
      accelPerPoint: 1.7,
      accelPerHundred: 70,
      startEggs: 1,
      maxEggs: 3,
      eggsEvery: 12,
      minSpawnGap: 2,
      spawnChance: 0.55,
    },
    B: {
      title: 'ИГРА Б',
      description: 'быстрее и больше яиц',
      startInterval: 430,
      minInterval: 160,
      accelPerPoint: 1.5,
      accelPerHundred: 60,
      startEggs: 2,
      maxEggs: 4,
      eggsEvery: 25,
      minSpawnGap: 1,
      spawnChance: 0.5,
    },
  },
};
