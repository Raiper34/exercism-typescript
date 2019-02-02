export default class Squares {

  constructor(private num: number) {}

  get squareOfSum(): number {
    return [...Array(this.num).keys()].reduce((acc, cur) => acc + (cur + 1) ,0) ** 2;
  }

  get sumOfSquares(): number {
    return [...Array(this.num).keys()].reduce((acc, cur) => acc + ((cur + 1) ** 2) ,0);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}