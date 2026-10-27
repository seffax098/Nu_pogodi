/** Счёт на четырёх цифрах: незначащие нули гасим, как на настоящем табло */
export function formatScore(score: number, digits = 4): string {
  const value = Math.max(0, Math.floor(score)) % 10 ** digits;

  return String(value).padStart(digits, ' ');
}

export function formatClock(date: Date): string {
  const hours = String(date.getHours()).padStart(2, ' ');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}${minutes}`;
}
