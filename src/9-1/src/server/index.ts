import Express from 'express'
import { Health } from '../types/api'

const app = Express()
import cors from 'cors'

// cors
app.use(cors())

app.get('/api/health', (req, res) => {
  console.log(req)
  const data: Health = { message: 'pong' }
  res.send(data)
})

app.use((req, res, next) => {
  console.log(req)
  res.sendStatus(404)
  next({ statusCode: 404 })
})

app.use(
  (
    err: { statusCode: number },
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    console.log(req)
    console.log(res)
    console.log(next)
    console.log(err)
  }
)

const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`running on http//${host}:${port}`)
})
