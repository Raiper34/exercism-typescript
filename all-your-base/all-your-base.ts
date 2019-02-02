export default class Converter {

  convert(digits: number[], sourceBase: number, destinationBase: number): number[] {
    this.checkErrors(digits, sourceBase, destinationBase);
    return this.convertToTarget(this.convertFromDecimal(digits, sourceBase), destinationBase);
  }

  private checkErrors(digits: number[], sourceBase: number, destinationBase: number): void {
    if (sourceBase < 2 || !Number.isInteger(sourceBase)) { //base need to be higher than 1 and integer
      throw new Error('Wrong input base');
    }
    if (destinationBase < 2 || !Number.isInteger(destinationBase)) { //base need to be higher than 1 and integer
      throw new Error('Wrong output base');
    }
    if (!digits.length || (digits.length > 1 && digits[0] === 0)) { //leading zero or empty array
      throw new Error('Input has wrong format');
    }
  }

  private convertFromDecimal(digits: number[], sourceBase: number): number {
    return digits.reduce((acc, cur, index) => {
      if (cur < 0 || cur >= sourceBase) { // digit can not be negative and higher than sourceBase
        throw new Error('Input has wrong format');
      }
      return acc + (cur * (sourceBase ** (digits.length - index - 1)));
    }, 0)
  }

  private convertToTarget(decimalNumber: number, destinationBase: number): number[] {
    let num = decimalNumber;
    const targetDigits: number[] = [];
    while (num >= destinationBase) { // while there is number higher that target base
      targetDigits.unshift(num % destinationBase);
      num = Math.floor(num / destinationBase);
    }
    targetDigits.unshift(num);
    return targetDigits;
  }
}