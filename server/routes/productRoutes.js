import express from 'express'
import {
  getProducts,
  getProductDetails,
  deleteProductById,
  createProduct,
  updateProduct,
} from '../controllers/productController.js'
import { routeProtection } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(getProducts)
  .post(routeProtection, adminOnly, createProduct)

router
  .route('/:id')
  .get(getProductDetails)
  .delete(routeProtection, adminOnly, deleteProductById)
  .put(routeProtection, adminOnly, updateProduct)

export default router
