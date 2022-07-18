import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import { CollinsService } from './services/collins'
import { CollinsScraping } from './scrapings/collins'

const app = express()

app.get('/:word', async (req, res) => {
  const {
    params: {
      word
    }
  } = req

  try {
    const Service: CollinsService = new CollinsService('english', word)
    const ipaHTML = await Service.getIpa()

    const Scraping: CollinsScraping = new CollinsScraping(ipaHTML)

    return res.json({
      pronunciation: Scraping.getPronunciation(),
      url: Service.getUrl()
    })

  } catch (error) {
    let message = 'Unknown error'
    if (error instanceof Error) message = error.message

    res.status(500).json({
      error: message
    })
  }
})

export {
  app
}
