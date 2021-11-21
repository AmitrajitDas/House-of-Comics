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

export const getProductDetails = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
  }
})

// @desc Delete product by id
// @route DELETE /api/products/:id
// @access Private/Admin

export const deleteProductById = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)

    if (product) {
      await product.remove()
      res.json({ message: `${product.name} is removed` })
    }
  } catch (error) {
    res.status(404)
    const err = new Error('Product not found')
    next(err)
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = asyncHandler(async (req, res, next) => {
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
    const err = new Error('Error creating product')
    next(err)
  }
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res, next) => {
  try {
    const {
      name,
      price,
      description,
      image,
      publisher,
      category,
      countInStock,
    } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
      product.name = name
      product.price = price
      product.description = description
      product.image = image
      product.publisher = publisher
      product.category = category
      product.countInStock = countInStock

      const updatedProduct = await product.save()
      res.json(updatedProduct)
    }
  } catch (error) {
    res.status(404)
    const err = new Error('Product not found')
    next(err)
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
export const createProductReview = asyncHandler(async (req, res, next) => {
  const { rating, comment } = req.body

  try {
    const product = await Product.findById(req.params.id)

    if (product) {
      const reviewExists = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      )

      if (reviewExists) {
        res.status(400)
        const err = new Error('Product already reviewed')
        next(err)
      }

      const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
      }

      product.reviews.push(review)

      product.numReviews = product.reviews.length

      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length

      await product.save()
      res.status(201).json({ message: 'Review added' })
    }
  } catch (error) {
    res.status(404)
    const err = new Error('Product not found')
    next(err)
  }
})
