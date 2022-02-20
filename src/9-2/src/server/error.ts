import Express from 'express'
import createHttpError, { HttpError } from 'http-errors'

export default (app: Express.Application) => {
  app.use((req, res, next) => {
    console.log(req)
    res.render('404.ejs')
    next(createHttpError(404))
  })

  app.use(
    (
      err: HttpError,
      req: Express.Request,
      res: Express.Response,
      next: Express.NextFunction
    ) => {
      console.log(req)
      console.log(res)
      console.log(next)
      console.log(err.statusCode)
    }
  )
}
