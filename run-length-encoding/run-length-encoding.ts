interface RleEncode {
  key: string;
  value: number;
}

export default class RunLengthEncoding {

  static encode(stringToEncode: string): string {
    let temp: RleEncode[] = [];
    [...stringToEncode].forEach(char =>
      temp.length && temp[temp.length - 1].key === char ? temp[temp.length - 1].value++ : temp.push({key: char, value: 1}));
    return temp.map(item => `${item.value > 1 ? item.value : ''}${item.key}`).join('');
  }

  private static isDigit(char: string): boolean {
    return '0123456789'.includes(char);
  }

  static decode(stringToDecode: string): string {
    let temp = '';
    let tempNumber = '';
    [...stringToDecode].forEach(char => {
      if (this.isDigit(char)) {
        tempNumber += char;
      } else {
        temp += new Array(Number.parseInt(tempNumber) || 1).fill(char).join('');
        tempNumber = '';
      }
    });
    return temp;
  }

}