const UNITS: {unit: Intl.RelativeTimeFormatUnit; ms: number}[] = [
  {unit: 'year', ms: 31536000000},
  {unit: 'month', ms: 2628000000},
  {unit: 'day', ms: 86400000},
  {unit: 'hour', ms: 3600000},
  {unit: 'minute', ms: 60000},
  {unit: 'second', ms: 1000},
];
const rtf = new Intl.RelativeTimeFormat('en', {numeric: 'auto'});

export function getRelativeTime(
  relative: Date | null,
  pivot: Date = new Date(),
): string {
  if (!relative) return '';
  const elapsed = relative.getTime() - pivot.getTime();
  return relativeTimeFromElapsed(elapsed);
}

function relativeTimeFromElapsed(elapsed: number): string {
  for (const {unit, ms} of UNITS) {
    if (Math.abs(elapsed) >= ms || unit === 'second') {
      return rtf.format(Math.round(elapsed / ms), unit);
    }
  }
  return '';
}
