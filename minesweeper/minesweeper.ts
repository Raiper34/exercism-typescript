interface MineField {
  value: number;
  mine: boolean;
}

const MINE = '*';
const SURROUNDINGS = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]];

export default class Minesweeper {

  private board: MineField[][];

  annotate(textBoard: string[]): string[] {
    this.board = textBoard.map(row => [...row].map(item => ({value: 0, mine: item === MINE})));
    return this.computeDanger().map(row => row.map(item => item.mine ? MINE : item.value || ' ').join(''));
  }

  private hasMine(y: number, x: number): boolean {
    if (y < 0 || x < 0 || y >= this.board.length || x >= this.board[0].length)
      return false;
    return this.board[y][x].mine;
  }

  private computeDanger(): MineField[][] {
    return this.board.map((row, y) => row.map((item, x) =>
      ({...item, value: SURROUNDINGS.reduce((acc, cur) =>  acc + (this.hasMine(cur[0] + y, cur[1] + x) ? 1 : 0), 0)})
    ))
  }
}