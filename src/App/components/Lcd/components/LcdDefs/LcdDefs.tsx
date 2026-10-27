/** Общие SVG-определения: градиент стекла и тень, которую горящие сегменты отбрасывают на подложку */
export const LcdDefs = () => (
  <defs>
    <linearGradient id="lcdGlass" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stopColor="#d3d8bf" />
      <stop offset="1" stopColor="#b9c0a2" />
    </linearGradient>
    <filter id="lcdShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="2.5" dy="3" stdDeviation="1" floodColor="#1b2014" floodOpacity="0.28" />
    </filter>
  </defs>
);
