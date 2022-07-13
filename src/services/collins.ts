import axios from 'axios'

interface ServiceI {
  url: string
  language: string
  word: string
}

export class CollinsService implements ServiceI {
  url = 'https://www.collinsdictionary.com/dictionary'
  language: string
  word: string

  constructor(language: string, word: string) {
    this.language = language

    const decodeWord = decodeURIComponent(word.trim())

    if (/\s/g.test(decodeWord)) {
      throw new Error('You must pass just one word')
    }

    this.word = word
  }

  private getUrl() {
    return `${this.url}/${this.language}/${this.word}`
  }

  public async getIpa(): Promise<string> {
    const response = await axios.get(this.getUrl())

    return response.data
  }
}
