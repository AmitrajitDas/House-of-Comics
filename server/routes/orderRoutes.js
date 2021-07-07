import express from 'express'
import { addOrderItems, getOrderDetails } from '../controllers/orderController.js'
import { routeProtection } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(routeProtection, addOrderItems)
router.route('/:id').get(routeProtection, getOrderDetails)

export default router
