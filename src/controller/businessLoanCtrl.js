import BusinessUsers from '../models/businessLoanModel.js'

export const businessDataFunc = async (req, res) => {
  const {
    NIN,
    currAddress,
    email,
    explanation,
    gender,
    nationality,
    office,
    status,
    userFName,
    userMName,
    userPhoneNo,
    userSurname,
    guarantorSurname,
    guarantorFName,
    guarantorPhoneNo,
    guarantorPositonHeld,
    guarantorRelation,
    guarantorResidentialAddress,
    guarantorOficeAddress,
    guarantorBName,
    nextSurname,
    nextFName,
    nextPhoneNo,
    nextGender,
    nextRelation,
    nextResidentialAddress,
  } = req.body
  try {
    const signUpUser = await BusinessUsers.businessData(
      NIN,
      currAddress,
      email,
      explanation,
      gender,
      nationality,
      office,
      status,
      userFName,
      userMName,
      userPhoneNo,
      userSurname,
      guarantorSurname,
      guarantorFName,
      guarantorPhoneNo,
      guarantorPositonHeld,
      guarantorRelation,
      guarantorResidentialAddress,
      guarantorOficeAddress,
      guarantorBName,
      nextSurname,
      nextFName,
      nextPhoneNo,
      nextGender,
      nextRelation,
      nextResidentialAddress,
    )
    // const token = createToken(signUpUser._id)
    res
      .status(200)
      .json({ signUpUser, message: 'Successfully Acquired a Loan' })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}

export const getAllBusinessData = async (req, res) => {
  const allData = await BusinessUsers.find().sort({ createdAt: -1 })
  res.send(allData)
}
export const getSingleBusinessData = async (req, res) => {
  const { id: userId } = req.params
  console.log(userId)
  const allData = await BusinessUsers.findById(userId)
  res.send(allData)
}
