import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc Fetch a product by id
// @route GET /api/products/:id
// @access Public

export const getProductDetails = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc Delete product by id
// @route DELETE /api/products/:id
// @access Private/Admin

export const deleteProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (product) {
      await product.remove()
      res.json({ message: `${product.name} is removed` })
    }
  } catch (error) {
    res.status(404)
    throw new Error('Product not found')
  }
})
