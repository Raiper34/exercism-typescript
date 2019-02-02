/**
 * Flatten Array
 * Take a nested list and return a single flattened list with all values except nil/null.
 * The challenge is to write a function that accepts an arbitrarily-deep nested list-like structure and returns a flattened structure without any nil/null values.
 * For Example
 * input: [1,[2,3,null,4],[null],5]
 * output: [1,2,3,4,5]
 * @Author: Filip Raiper34 Gulan
 */
export default class FlattenArray {

  static flatten(arr: any): any[] {
    return arr.reduce((acc: any, cur: any) =>
      cur instanceof Array ?
        [...acc, ...FlattenArray.flatten(cur)] : // is array
        [...acc, ...(isNaN(cur) ? [] : [cur])], []); // is number
  }
}