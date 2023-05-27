import express from 'express'
import {
  getAllPersonalData,
  getSinglePersonalData,
  personalDataFunc,
} from '../controller/personalLoanCtrl.js'
import {
  businessDataFunc,
  getAllBusinessData,
  getSingleBusinessData,
} from '../controller/businessLoanCtrl.js'
const loanRouter = express.Router()
// app.get('/api/product',

loanRouter.post('/users/personal', personalDataFunc)
loanRouter.post('/users/business', businessDataFunc)
loanRouter.get('/users/business', getAllBusinessData)
loanRouter.get('/users/business/:id', getSingleBusinessData)
loanRouter.get('/users/personal/:id', getSinglePersonalData)
loanRouter.get('/users/personal', getAllPersonalData)

export default loanRouter
