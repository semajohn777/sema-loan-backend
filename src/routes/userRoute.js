import express from 'express'
import { signInUserFunc, signUpUserFunc } from '../controller/userCtrl.js'
const userRouter = express.Router()
// app.get('/api/product',

userRouter.post('/users/signup', signUpUserFunc)
userRouter.post('/users/signin', signInUserFunc)

export default userRouter
