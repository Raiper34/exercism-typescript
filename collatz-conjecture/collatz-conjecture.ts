class CollatzConjecture {

    private static checkNumberValidity(num: number): void {
      if (num <= 0)
        throw new Error('Only positive numbers are allowed');
    }
    
    private static isEven(num: number): boolean {
        return num % 2 === 0;
    }

    private static doStep(num: number): number {
      if (this.isEven(num)) {
        return num /= 2;
      }
      return (num * 3) + 1;
    }

    static steps(num: number) {
        this.checkNumberValidity(num);
        let numTemp = num;
        let counter = 0;
        while (numTemp !== 1) {
            numTemp = this.doStep(numTemp);
            counter++;
        }
        return counter;
    }
}

export default CollatzConjecture