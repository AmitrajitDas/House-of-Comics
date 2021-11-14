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

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = new Product({
      user: req.user._id,
      name: 'Sample name',
      image: '/images/sample.jpg',
      description: 'Sample description',
      publisher: 'Sample publisher',
      category: 'Sample category',
      price: 0,
      countInStock: 0,
      numReviews: 0,
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  } catch (error) {
    res.status(404)
    throw new Error('Error creating product')
  }
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { name, price, description, image, brand, category, countInStock } =
      req.body

    const product = await Product.findById(req.params.id)

    if (product) {
      product.name = name
      product.price = price
      product.description = description
      product.image = image
      product.brand = brand
      product.category = category
      product.countInStock = countInStock

      const updatedProduct = await product.save()
      res.json(updatedProduct)
    }
  } catch (error) {
    res.status(404)
    throw new Error('Product not found')
  }
})
