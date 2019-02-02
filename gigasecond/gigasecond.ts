const GIGA_SEC = 10 ** 12; // in milliseconds

export default class Gigasecond {

  constructor(private sourceDate: Date) { }

  date(): Date {
    return new Date(+this.sourceDate + GIGA_SEC);
  }
}