import { CollinsScraping } from '../collins'

import { HTML } from '../__mocks__'

describe('Scraping Collins', () => {
  let CollinsInstance: CollinsScraping

  beforeEach(() => {
    CollinsInstance = new CollinsScraping(HTML)
  })

  it('should return true', () => {
    expect(CollinsInstance.getPronunciation()).toBe('wɜrld')
  })
})
