export default class Words {
  count(text: string): Map<string, number> {
    const wordAscArr = Object.create(null);
    text.toLowerCase().split(/\s/)
      .filter(item => item !== '')
      .forEach(word => wordAscArr[word] = wordAscArr[word] ? wordAscArr[word] + 1 : 1);
    return new Map(Object.entries(wordAscArr));
  }
}