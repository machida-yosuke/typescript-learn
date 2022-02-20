import Express from 'express'
import { APP_HOST, APP_PORT } from './../constants'

export default (app: Express.Application) => {
  app.listen(APP_PORT, APP_HOST, () => {
    console.log(`run on http://${APP_HOST}:A${APP_PORT}`)
  })
}
