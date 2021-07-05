import express from 'express'
import { addOrderItems } from '../controllers/orderController.js'
import { routeProtection } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(addOrderItems, routeProtection)

export default router
