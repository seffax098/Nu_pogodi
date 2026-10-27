/**
 * Чистая игровая логика: никаких таймеров, DOM и звука.
 * Каждая функция получает состояние и возвращает новое, так что движок легко тестировать.
 */
export { autopilot } from './autopilot';
export { CHUTES, chuteLevel, chuteSide, toChute } from './chutes';
export { getMaxEggs, getTickInterval } from './difficulty';
export { moveWolf, moveWolfRelative } from './movement';
export { createInitialState, startGame, togglePause } from './state';
export { tick } from './tick';
