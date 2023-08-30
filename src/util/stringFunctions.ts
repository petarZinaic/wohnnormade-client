export function parseCellValueToClass(value: string) {
  return value.replace(/\s+/g,"-").toLowerCase();
}