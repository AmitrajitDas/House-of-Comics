import express from 'express'
import { userLogin, getUserProfile } from '../controllers/userController.js'
import { routeProtection } from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/login').post(userLogin)
router.route('/profile').get(routeProtection, getUserProfile)


export default router
