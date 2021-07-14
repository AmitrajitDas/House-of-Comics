import express from 'express'
import {
  getProducts,
  getProductDetails,
} from '../controllers/productController.js'

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductDetails)

export default router
