export function stringToKebabCase(str: string): string {
  return str
    .replace(/(?<lower>[a-z])(?<upper>[A-Z])/g, '$<lower>-$<upper>')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}
