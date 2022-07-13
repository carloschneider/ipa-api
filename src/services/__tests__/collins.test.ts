import axios from 'axios'

import { CollinsService } from '../collins'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Service Collins', () => {
  it('should return a HTML from Collins website', async () => {
    const CollinsInstance = new CollinsService('english', 'hello')

    mockedAxios.get.mockResolvedValue({
      data: 'Collins HTML'
    })

    const getIpa = await CollinsInstance.getIpa()

    expect(getIpa).toBe('Collins HTML')
  })

  it('should return error when pass more than one word', () => {
    expect(() => new CollinsService('english', 'hello world')).toThrow()
  })
})
