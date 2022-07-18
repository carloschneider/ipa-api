import axios from 'axios'
import request from 'supertest'

import { app } from '../app'
import { HTML } from '../scrapings/__mocks__'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('App', () => {
  it('should return json with word pronunciantion', async () => {
    mockedAxios.get.mockResolvedValue({
      data: HTML
    })

    const response = await request(app)
      .get('/world')
      .expect(200)

    expect(response.body.pronunciation).toEqual('wɜːʳld')
  })

  it('should return error', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Mocked error'))

    const response = await request(app)
      .get('/world')
      .expect(500)

    expect(response.body.error).toEqual('Mocked error')
  })
})
