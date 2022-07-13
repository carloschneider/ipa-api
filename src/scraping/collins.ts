import { cheerio } from 'cheerio';

export class CollinsScraping {
  private html: string

  constructor(html: string) {
    this.html = html
  }

  public getIpa(): string {
    return 'a'
  }
}
