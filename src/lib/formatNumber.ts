const SUFFIXES = [
  '',
  'K',
  'M',
  'B',
  'T',
  'Qa',
  'Qi',
  'Sx',
  'Sp',
  'Oc',
  'No',
  'Dc',
  'UDc',
  'DDc',
  'TDc',
  'QaDc',
  'QiDc',
  'SeDc',
  'ODc',
  'NDc',
  'Vig',
];

export function formatNumber(value: number): string {
  if (value < 1000) {
    return Math.floor(value).toString();
  }
  let shrunk = value;
  let tier = 0;
  while (shrunk >= 1000 && tier < SUFFIXES.length - 1) {
    shrunk /= 1000;
    tier += 1;
  }
  return shrunk.toFixed(2) + SUFFIXES[tier];
}
