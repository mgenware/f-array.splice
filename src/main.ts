export function arrayInsertAt<T>(array: T[], index: number, ...items: T[]) {
  array.splice(index, 0, ...items);
}

export function arrayRemoveAt<T>(array: T[], index: number) {
  array.splice(index, 1);
}

export function pureArrayInsertAt<T>(
  array: readonly T[],
  index: number,
  ...items: T[]
): readonly T[] {
  return [...array.slice(0, index), ...items, ...array.slice(index)];
}

export function pureArrayRemoveAt<T>(array: readonly T[], index: number): readonly T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function pureArraySet<T>(array: readonly T[], index: number, item: T): readonly T[] {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}
