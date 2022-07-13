import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import { CollinsService } from './services/collins'

const app = express()

app.get('/', (req, res) => {
  const Service = new CollinsService('english', 'hello')

  Service.getIpa()

  return res.json({
    hello: 'world'
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
