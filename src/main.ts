export function arrayInsertAt<T>(array: T[], index: number, ...items: T[]) {
  array.splice(index, 0, ...items);
}

export function arrayRemoveAt<T>(array: T[], index: number) {
  array.splice(index, 1);
}
