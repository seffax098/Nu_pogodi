import { useEffect, useState } from 'react';

const CLOCK_REFRESH_MS = 500;

/** Текущее время для часов на табло; тикает, только пока active */
export function useNow(active: boolean) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (!active) {
      return undefined;
    }
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), CLOCK_REFRESH_MS);

    return () => window.clearInterval(id);
  }, [active]);

  return now;
}
