import { useEffect, useState } from 'react';

export interface FitScale {
  scale: number;
  portrait: boolean;
}

const PORTRAIT_RATIO = 0.9;
const MAX_SCALE = 1.6;

function measure(width: number, height: number): FitScale {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const portrait = vw / vh < PORTRAIT_RATIO;
  const scale = portrait ? (vw * 0.98) / width : Math.min((vw * 0.96) / width, (vh * 0.94) / height);

  return { scale: Math.min(scale, MAX_SCALE), portrait };
}

/**
 * Подгоняет макет фиксированного размера под окно.
 * В портретной ориентации корпус занимает ширину экрана, а под ним появляется большой тач-пульт.
 */
export function useFitScale(width: number, height: number): FitScale {
  const [fit, setFit] = useState(() => measure(width, height));

  useEffect(() => {
    const onResize = () => setFit(measure(width, height));
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [width, height]);

  return fit;
}
