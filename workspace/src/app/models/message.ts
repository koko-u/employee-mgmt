export class Message {
  public date: Date;
  public text: string;

  constructor(date: Date, text: string);
  constructor(text: string);
  constructor(fst: Date | string, snd?: string) {
    if (fst instanceof Date) {
      this.date = fst
      this.text = snd ?? ''
    } else {
      this.date = new Date()
      this.text = fst
    }
  }

  toString(): string {
    return `[${this.strDate(this.date)}] ${this.text}`
  }

  private strDate(date: Date): string {
    return date.toLocaleString('ja', { formatMatcher: 'basic'})
  }
}
