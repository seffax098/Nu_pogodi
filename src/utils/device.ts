export const isTouchDevice = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;

export function vibrate(pattern: number | number[]) {
  window.navigator.vibrate?.(pattern);
}
