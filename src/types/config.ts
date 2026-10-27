export interface ModeConfig {
  /** Подпись режима на экране */
  title: string;
  /** Короткое описание режима в меню */
  description: string;
  /** Интервал между тактами в начале игры, мс */
  startInterval: number;
  /** Минимально возможный интервал, мс */
  minInterval: number;
  /** На сколько мс ускоряется такт за каждое очко внутри сотни */
  accelPerPoint: number;
  /** На сколько мс ускоряется «база» после каждой сотни (внутри сотни скорость растёт пилой) */
  accelPerHundred: number;
  /** Сколько яиц может одновременно катиться в начале */
  startEggs: number;
  /** Верхний предел яиц на экране */
  maxEggs: number;
  /** Каждые N очков добавляется ещё одно яйцо */
  eggsEvery: number;
  /** Минимум тактов между появлением двух яиц */
  minSpawnGap: number;
  /** Вероятность появления яйца в такт, когда это разрешено */
  spawnChance: number;
}

export interface GameConfig {
  /** Сколько позиций у яйца на жёлобе (последняя — край жёлоба) */
  rampSteps: number;
  /** Сколько «половинок» промахов до конца игры (6 = три цыплёнка) */
  maxMissHalves: number;
  /** Очки, при достижении которых все промахи списываются */
  bonusScores: number[];
  /** Сколько тактов длится анимация разбитого яйца и убегающего цыплёнка */
  crashFrames: number;
  hare: {
    /** Шанс, что Заяц выглянет, за такт */
    appearChance: number;
    /** Шанс, что Заяц спрячется, за такт */
    hideChance: number;
  };
  modes: {
    A: ModeConfig;
    B: ModeConfig;
  };
}
