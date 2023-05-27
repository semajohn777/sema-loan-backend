console.log('Hello')
import express from 'express'
import dotenv from 'dotenv'
import connectDb from './src/db/MyDb.js'
import cors from 'cors'
import userRouter from './src/routes/userRoute.js'
import loanRouter from './src/routes/personalLoanRoute.js'

const app = express()

app.use(express.json())
app.use(cors())
// app.use(express.urlencoded({ extended: true }))
dotenv.config()
app.use(userRouter)
app.use(loanRouter)
// app.get('/api/data', (req, res) => {
//   res.send('This is just the begining')
// })
connectDb(process.env.JOHN_URL).then(() => {
  console.log('db conneted')
})

app.listen(5000 || process.env.PORT, () => {
  console.log('Sema Loan App Begins')
})
