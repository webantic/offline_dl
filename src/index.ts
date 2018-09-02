import * as directline from './bridge'
import * as express from 'express'

const app = express()
const port = process.env.PORT || '3000'
const selfUrl = process.env.SELF_URL || `http://127.0.0.1:${port}`
const botUrl = process.env.BOT_URL || 'http://127.0.0.1:4000'

app.get('/', (req, res, next) => {
  res.status(200).send('Local Directline')
})

console.log(`Initialising Directline on ${selfUrl}. Bot backend configured as ${botUrl}`)
directline.initializeRoutes(app, selfUrl, botUrl, true, parseInt(port, 10))
