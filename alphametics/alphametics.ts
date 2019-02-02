interface Letters {
  [key: string]: number;
}

const POSSIBILITIES_COUNT = 10;

export default class Alphametics {

  private letters: Letters;
  private operands: string[][];
  private result: string[];

  constructor(puzzle: string) {
    [this.result, ...this.operands] = puzzle
      .split(/ \+ | \== /).reverse()
      .map(item => item.split(''));
  }

  private compute(arrString: string[]): number {
    return Number.parseInt(arrString.reduce((acc, cur) => `${acc}${this.letters[cur]}`, ''));
  }

  private createLetters(): void {
    new Set([...this.operands.reduce((acc, cur) => [...acc, ...cur], []), ...this.result])
      .forEach(item => this.letters = {...this.letters, [item]: 0});
  }

  private incrementLetterValue(index: number, keys: string[]): void {
    const letterIndex = keys[index];
    this.letters[letterIndex]++;
    if (this.letters[letterIndex] === POSSIBILITIES_COUNT) {
      this.letters[letterIndex] = 0;
      index + 1 < keys.length && this.incrementLetterValue(index + 1, keys);
    }
  }

  private areValuesDifferent(): boolean {
    return (new Set(Object.values(this.letters))).size === Object.values(this.letters).length;
  }

  private containLeadingZero(): boolean {
    return !this.letters[this.result[0]] || this.operands.some(item => !this.letters[item[0]]);
  }

  solve(): Letters | undefined {
    this.createLetters();
    const variationsCount = Object.keys(this.letters).length ** POSSIBILITIES_COUNT;
    const keys = Object.keys(this.letters);
    for (let i = 0; i <= variationsCount / 10; i++) {
      if (this.areValuesDifferent() && this.operands.reduce((acc, cur) => acc + this.compute(cur), 0) === this.compute(this.result)
        && !this.containLeadingZero()) {
        return this.letters;
      }
      this.incrementLetterValue(0, keys);
    }
    return undefined;
  }

}