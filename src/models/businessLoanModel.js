import mongoose from 'mongoose'
import validator from 'validator'

const Schema = mongoose.Schema

const personalSchema = new Schema(
  {
    NIN: { type: String, required: true },
    currAddress: { type: String, required: true },
    email: { type: String, required: true },
    explanation: { type: String, required: true },
    gender: { type: String, required: true },
    nationality: { type: String, required: true },
    office: { type: String, required: true },
    status: { type: String, required: true },
    userFName: { type: String, required: true },
    userMName: { type: String, required: true },
    userPhoneNo: { type: Number, required: true },
    userSurname: { type: String, required: true },
    guarantorSurname: { type: String, required: true },
    guarantorFName: { type: String, required: true },
    guarantorPhoneNo: { type: Number, required: true },
    guarantorPositonHeld: { type: String, required: true },
    guarantorRelation: { type: String, required: true },
    guarantorResidentialAddress: { type: String, required: true },
    guarantorOficeAddress: { type: String, required: true },
    guarantorBName: { type: String, required: true },
    nextSurname: { type: String, required: true },
    nextFName: { type: String, required: true },
    nextPhoneNo: { type: Number, required: true },
    nextGender: { type: String, required: true },
    nextRelation: { type: String, required: true },
    nextResidentialAddress: { type: String, required: true },
  },

  { timestamps: true },
)

personalSchema.statics.businessData = async function (
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
) {
  if (
    !NIN ||
    !currAddress ||
    !email ||
    !explanation ||
    !gender ||
    !nationality ||
    !office ||
    !status ||
    !userFName ||
    !userMName ||
    !userPhoneNo ||
    !userSurname ||
    !guarantorSurname ||
    !guarantorFName ||
    !guarantorPhoneNo ||
    !guarantorPositonHeld ||
    !guarantorRelation ||
    !guarantorResidentialAddress ||
    !guarantorOficeAddress ||
    !guarantorBName ||
    !nextSurname ||
    !nextFName ||
    !nextPhoneNo ||
    !nextGender ||
    !nextRelation ||
    !nextResidentialAddress
  ) {
    throw Error('Please fill all input !!!')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  const personalDataCredential = await this.create({
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
    guarantorFName,
    guarantorSurname,
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
  })
  return personalDataCredential
}

const BusinessUsers = mongoose.model('Business', personalSchema)
export default BusinessUsers
