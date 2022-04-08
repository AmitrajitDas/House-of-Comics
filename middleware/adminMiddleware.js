import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const adminOnly = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    throw new Error('Not authorized as admin')
  }
})
