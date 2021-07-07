import express from 'express'
import { addOrderItems, getOrderDetails, updateOrderToPaid } from '../controllers/orderController.js'
import { routeProtection } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(routeProtection, addOrderItems)
router.route('/:id').get(routeProtection, getOrderDetails)
router.route('/:id/payment').put(routeProtection, updateOrderToPaid)

export default router
