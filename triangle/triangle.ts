const TRIANGLE_TYPES = ['scalene', 'isosceles', 'equilateral'];

export default class Triangle {

  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides
  }

  private getElement(index: number): number {
    return this.sides[index % this.sides.length];
  }

  private get getTypeIndex(): number {
    return Math.min(this.sides.filter((item, index) => item === this.getElement(index + 1)).length, 2);
  }

  private get isInvalid(): boolean {
    return this.sides.some((item, index) => item <= 0 || item > this.getElement(index + 1) + this.getElement(index + 2))
  }

  kind(): string {
    if (this.isInvalid)
      throw Error();
    return TRIANGLE_TYPES[this.getTypeIndex];
  }
}