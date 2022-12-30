import express from 'express'
import colors from 'colors'
import { router } from './routes/loginRoutes'

colors.enable()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log('Listening: http://localhost:3000/'.green.bold)
})
