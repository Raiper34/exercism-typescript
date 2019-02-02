export default class ArmstrongNumbers {

  static isArmstrongNumber(nmr: number): boolean {
    const digitArr = [...String(nmr)];
    return digitArr.reduce((acc, cur) => acc + (Number(cur) ** digitArr.length), 0) === nmr;
  }
}