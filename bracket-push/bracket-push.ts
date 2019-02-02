/**
 * Bracket Push
 * Given a string containing brackets [], braces {} and parentheses (), verify that all the pairs are matched and nested correctly.
 * @Author: Filip Raiper34 Gulan
 * @type {string[]}
 */
const BRACKETS = ['{', '}', '[', ']', '(', ')'] // you can add more brackets, but keep order (first are opening, second are closing)

export default class BracketPush {

  private stringToValidate: string

  constructor(stringToValidate: string) {
    this.stringToValidate = stringToValidate
  }

  private getArray(): string[] {
    return this.stringToValidate.split('')
      .filter((bracket) => BRACKETS.some((BRACKET) => BRACKET === bracket))
  }

  private static isClosing(bracketIndex: number): boolean {
    return bracketIndex % 2 === 1 // even indexes in BRACKETS const are closing brackets
  }

  private getIndexFromTemplate(bracket: string): number {
    return BRACKETS.findIndex((BRACKET) => BRACKET === bracket)
  }

  private static hasPair(bracketIndex: number, bracketStack: string[]): boolean {
    return BRACKETS[bracketIndex - 1] === bracketStack[bracketStack.length - 1]
  }

  isPaired(): boolean {
    const brackets = this.getArray()
    const bracketStack: string[] = []
    brackets.forEach((bracket) => {
      const bracketIndex = this.getIndexFromTemplate(bracket)
      if (BracketPush.isClosing(bracketIndex) && BracketPush.hasPair(bracketIndex, bracketStack)) {
        bracketStack.splice(-1, 1)
      } else {
        bracketStack.push(bracket)
      }
    })
    return !bracketStack.length
  }

}