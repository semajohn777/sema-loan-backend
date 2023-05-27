import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

userSchema.statics.signup = async function (
  firstName,
  userName,
  email,
  password,
) {
  if (!firstName || !userName || !email || !password) {
    throw Error('Please fill all input !!!')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      'Password most contain(Number, Symbol, Alphabet but capital and small) and most be greater than 6 character',
    )
    //
  }

  const isActiveUser = await this.findOne({ email })
  if (isActiveUser) {
    throw Error('User Already Exist, Sign In Instead')
  }
  const salt = await bcrypt.genSalt(10)
  console.log(salt)
  const hashPwd = await bcrypt.hash(password, salt)
  console.log(hashPwd)

  const createdUser = await this.create({
    firstName,
    userName,
    email,
    password: hashPwd,
  })
  return createdUser
}
userSchema.statics.signin = async function (email, password) {
  if (!email || !password) {
    throw Error('Please fill all input')
  }

  const isUser = await this.findOne({ email })
  if (!isUser) {
    throw Error('Incorrect Email, Sign Up or input the correct email ')
  }

  const comparePassword = await bcrypt.compare(password, isUser.password)

  if (!comparePassword) {
    throw Error('Incorrect Password')
  }

  return isUser
}

const Users = mongoose.model('User', userSchema)
export default Users
