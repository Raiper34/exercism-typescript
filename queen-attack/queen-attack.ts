const BOARD_SIZE = 8;

interface QueenPositions {
  white: [number, number],
  black: [number, number],
}

export default class QueenAttack {

  white: [number, number];
  black: [number, number];

  constructor(positions: QueenPositions) {
    this.white = positions.white;
    this.black = positions.black;
    if (this.white.every((item, index) => item === this.black[index])) {
      throw new Error('Queens cannot share the same space');
    }
  }

  private get isSameRow(): boolean {
    return this.white[0] === this.black[0];
  }

  private get isSameCol(): boolean {
    return this.white[1] === this.black[1];
  }

  private getCoordinatesLenght(index: number): number {
    return Math.abs(this.white[index] - this.black[index])
  }

  private get isDiagonal(): boolean {
    return this.getCoordinatesLenght(0) === this.getCoordinatesLenght(1);
  }

  canAttack(): boolean {
    return this.isSameRow || this.isSameCol || this.isDiagonal;
  }

  private generateBoard(): string[][] {
    const board = Array.from(Array(BOARD_SIZE), () => Array.from(Array(BOARD_SIZE), () => '_'));
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    return board;
  }

  toString(): string {
    return this.generateBoard().reduce((acc, cur) =>
      `${acc}${cur.reduce((acc, cur, curIndex) => `${acc}${curIndex ? ' ' : ''}${cur}` , '')}\n`,
      '');
  }
}