import PersonalUsers from '../models/personalLoanModel.js'

export const personalDataFunc = async (req, res) => {
  const {
    NIN,
    currAddress,
    email,
    explanation,
    gender,
    nationality,
    residentialAddress,
    status,
    userFName,
    userMName,
    userPhoneNo,
    userSurname,
    guarantorSurname,
    guarantorFName,
    guarantorPhoneNo,
    guarantorRelation,
    guarantorResidentialAddress,
    nextSurname,
    nextFName,
    nextPhoneNo,
    nextGender,
    nextRelation,
    nextResidentialAddress,
    occupation,
  } = req.body
  try {
    const signUpUser = await PersonalUsers.personalData(
      NIN,
      currAddress,
      email,
      explanation,
      gender,
      nationality,
      residentialAddress,
      status,
      userFName,
      userMName,
      userPhoneNo,
      userSurname,
      guarantorSurname,
      guarantorFName,
      guarantorPhoneNo,
      guarantorRelation,
      guarantorResidentialAddress,
      nextSurname,
      nextFName,
      nextPhoneNo,
      nextGender,
      nextRelation,

      nextResidentialAddress,
      occupation,
    )
    res.status(200).json({ email, message: 'Successfully Acquired a Loan' })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}
export const getAllPersonalData = async (req, res) => {
  const allDatas = await PersonalUsers.find().sort({ createdAt: -1 })
  res.send(allDatas)
}

export const getSinglePersonalData = async (req, res) => {
  const { id: userId } = req.params
  console.log(userId)
  const allData = await PersonalUsers.findById(userId)
  res.send(allData)
}
