import express from 'express'
import {
  addOrderItems,
  getOrderDetails,
  updateOrderToPaid,
  getUserOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/orderController.js'
import { routeProtection } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'

const router = express.Router()

router
  .route('/')
  .post(routeProtection, addOrderItems)
  .get(routeProtection, adminOnly, getOrders)
router.route('/myorders').get(routeProtection, getUserOrders)
router.route('/:id').get(routeProtection, getOrderDetails)
router.route('/:id/payment').put(routeProtection, updateOrderToPaid)
router
  .route('/:id/delivery')
  .put(routeProtection, adminOnly, updateOrderToDelivered)

export default router
