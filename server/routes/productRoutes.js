import express from 'express'
import {
  getProducts,
  getProductDetails,
  deleteProductById,
} from '../controllers/productController.js'
import { routeProtection } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts)
router
  .route('/:id')
  .get(getProductDetails)
  .delete(routeProtection, adminOnly, deleteProductById)

export default router
