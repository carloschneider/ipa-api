import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import { CollinsService } from './services/collins'
import { CollinsScraping } from './scraping/collins'

const app = express()

app.get('/:word', async (req, res) => {
  const {
    params: {
      word
    }
  } = req

  try {
    const Service = new CollinsService('english', word)
    const ipaHTML = await Service.getIpa()

    const Scraping = new CollinsScraping(ipaHTML)

    return res.json({
      pronunciation: Scraping.getPronunciation()
    })

  } catch (error) {
    let message = 'Unknown error'
    if (error instanceof Error) message = error.message

    res.status(500).json({
      error: message
    })
  }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
