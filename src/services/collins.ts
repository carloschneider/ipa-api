import axios from 'axios'

interface ServiceI {
  url: string
  language: string
  word: string
}

export class CollinsService implements ServiceI {
  url = 'https://www.collinsdictionary.com/dictionary'
  language: string;
  word: string;

  constructor(language = 'english', word: string) {
    this.language = language
    this.word = word
  }

  private getUrl() {
    return `${this.url}/${this.language}/${this.word}`
  }

  public async getIpa() {
    const response = await axios.get(this.getUrl())

    console.log(response.data)
  }
}
