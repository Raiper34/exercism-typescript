export default function accumulate<T>(arr: T[], acc: (element: T) => T): T|T[] {
  const newArr: T[] = [];
  for (const item of arr) {
   newArr.push(acc(item));
  }
  return newArr;
}