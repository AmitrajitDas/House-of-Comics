import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const generateAuthToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default generateAuthToken
