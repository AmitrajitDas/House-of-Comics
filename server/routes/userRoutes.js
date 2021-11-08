import express from 'express'
import {
  userLogin,
  userRegister,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} from '../controllers/userController.js'
import { routeProtection } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'

const router = express.Router()

router.route('/signup').post(userRegister)
router.route('/login').post(userLogin)
router
  .route('/profile')
  .get(routeProtection, getUserProfile)
  .put(routeProtection, updateUserProfile)
router.route('/users').get(routeProtection, adminOnly, getAllUsers)

export default router
