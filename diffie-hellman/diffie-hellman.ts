const MAX_DIFFIE_NUMBER = 1024;

export default class DiffieHellman {

  constructor(private p: number, private g: number) {
    this.checkParamValidity();
  }

  private  getKey(privateKey: number, publicKey: number = this.g): number {
    return (publicKey ** privateKey) % this.p;
  }

  private isPrime(param: number): boolean {
    for (let i = 2; i < param; i++) {
      if (param % i === 0)
        return false;
    }
    return true;
  }

  private checkParamValidity(): void {
    if (this.p > MAX_DIFFIE_NUMBER || this.g > MAX_DIFFIE_NUMBER ||
      !this.isPrime(this.p) || !this.isPrime(this.g))
      throw new Error();
  }

  private checkKeyValidity(privateKey: number): void {
    if (privateKey >= this.p ||  privateKey <= 1)
      throw new Error();
  }

  getPublicKeyFromPrivateKey(privateKey: number): number {
    this.checkKeyValidity(privateKey);
    return this.getKey(privateKey);
  }

  getSharedSecret(privateKey: number, publicKey: number): number {
    this.checkKeyValidity(privateKey);
    return this.getKey(privateKey, publicKey);
  }


}