import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateAuthToken from '../utils/token.js'

// @desc Authenticate users and get tokens
// @route POST /api/user/login
// @access Public

export const userLogin = asyncHandler( async(req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateAuthToken(user._id)
        })
        } else {
            res.status(401).send('Invalid User! check email and password again')
        }
})

// @desc Get user profile
// @route POST /api/user/profile
// @access Private

export const getUserProfile = asyncHandler( async(req, res) => {

    const user = await User.findById(req.user._id)

    if(user){

        res.json({
            _id: user._id,
            name: user.name,
            password: user.password,
            isAdmin: user.isAdmin
        })

    } else {

        res.status(404)
        throw new Error('User not found!')

    }
})