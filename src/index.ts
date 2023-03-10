import express from 'express'
import colors from 'colors'
import { router } from './routes/loginRoutes'
import cookieSession from 'cookie-session'

colors.enable()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['secret'] }))
app.use(router)

app.listen(3000, () => {
  console.log('Listening: http://localhost:3000/'.green.bold)
})
