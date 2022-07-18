import * as cheerio from 'cheerio'

export class CollinsScraping {
  private $: cheerio.CheerioAPI

  constructor(html: string) {
    this.$ = cheerio.load(html)
  }

  public getPronunciation(): string {
    return this
      .$('span.pron')
      .first()
      .text()
      .trim()
  }
}
