import Users from '../models/userCtrl.js'
import jwt from 'jsonwebtoken'

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}

export const signUpUserFunc = async (req, res) => {
  const { firstName, userName, email, password } = req.body
  try {
    const signUpUser = await Users.signup(firstName, userName, email, password)
    const token = createToken(signUpUser._id)
    res.status(200).json({ userName, token, message: 'Successfully signed in' })
    console.log(signUpUser)
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}
export const signInUserFunc = async (req, res) => {
  const { email, password } = req.body
  try {
    const signInUser = await Users.signin(email, password)
    const token = createToken(signInUser._id)
    res
      .status(200)
      .json({
        userName: signInUser.userName,
        email,
        token,
        message: 'Successfully signed in',
      })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}
