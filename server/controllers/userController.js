import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

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
            token: null
        })
        } else {
            res.status(401).send('Invalid User! check email and password again')
        }
})