import express from 'express'
import {
  getProducts,
  getProductsAll,
  getProductDetails,
  deleteProductById,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController.js'
import { routeProtection } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'

const router = express.Router()

router
  .route('/')
  .get(getProducts)
  .post(routeProtection, adminOnly, createProduct)

router.route('/list').get(getProductsAll)

router
  .route('/:id')
  .get(getProductDetails)
  .delete(routeProtection, adminOnly, deleteProductById)
  .put(routeProtection, adminOnly, updateProduct)

router.route('/:id/reviews').post(routeProtection, createProductReview)

export default router
