import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateAuthToken from '../utils/token.js'

// @desc Authenticate users and get tokens
// @route POST /api/auth/login
// @access Public

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateAuthToken(user._id),
    })
  } else {
    res.status(401).send('Invalid User! check email and password again')
  }
})

// @desc Registering by creating a new user
// @route POST /api/auth/signup
// @access Public

export const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const isUser = await User.findOne({ email })

  if (isUser) {
    res.status(400)
    throw new Error('User exists already')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateAuthToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Get user profile
// @route POST /api/auth/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found!')
  }
})

// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateAuthToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found!')
  }
})

// @desc Get all users
// @route GET /api/auth/users
// @access Private/Admin

export const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(404)
    throw new Error('Could not find users')
  }
})

// @desc Get users by id
// @route GET /api/auth/users/:id
// @access Private/Admin

export const getUsersById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password')
    res.status(200).json(user)
  } catch (error) {
    res.status(404)
    throw new Error('Could not find users')
  }
})

// @desc Update user by id
// @route PUT /api/auth/user/:id
// @access Private/Admin

export const updateUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.status(200).json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } catch (error) {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc Delete an user
// @route DELETE /api/auth/deleteuser/:id
// @access Private/Admin

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: `${user.name} is removed` })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
