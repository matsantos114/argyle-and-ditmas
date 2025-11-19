import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import apiRouter from './routes'

export function createServer() {
  const app = express()

  app.use(helmet())
  app.use(
    cors({
      origin: '*'
    })
  )
  app.use(express.json())

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' })
  })

  app.use('/api', apiRouter)

  app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  })

  return app
}
