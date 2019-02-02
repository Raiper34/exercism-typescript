const a_CODE = 97;
const z_CODE = 122;
const A_CODE = 65;
const Z_CODE = 90;

export default class RotationalCipher {

  static rotate(text: string, rot: number): string {
    return [...text].map(char => this.getNewCharacter(char, rot)).join('');
  }

  private static getNewCharacter(char: string, rot: number): string {
    const originalCharCode = char.charCodeAt(0);
    if (originalCharCode >= a_CODE && originalCharCode <= z_CODE) { // lower letter
      return String.fromCharCode(this.getNewCode(originalCharCode, a_CODE, z_CODE, rot));
    } else if (originalCharCode >= A_CODE && originalCharCode <= Z_CODE) { // upper letter
      return String.fromCharCode(this.getNewCode(originalCharCode, A_CODE, Z_CODE, rot))
    }
    return char;
  }

  private static getNewCode(code: number, minCode: number, maxCode: number, rot: number): number {
    const newCode = (code + rot) % (maxCode + 1);
    return newCode < minCode - 1 ? newCode + minCode : newCode;
  }
}
