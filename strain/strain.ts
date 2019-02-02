export function keep<T>(arr: T[], fn: (arg: T) => boolean): T[] {
  return getNewArray(arr, fn, false);
}

export function discard<T>(arr: T[], fn: (arg: T) => boolean): T[] {
  return getNewArray(arr, fn, true);
}

function getNewArray<T>(arr: T[], fn: (arg: T) => boolean, negate: boolean): T[] {
  const newArr: T[] = [];
  for (const item of arr) {
    fn(item) !== negate && newArr.push(item);
  }
  return newArr;
}