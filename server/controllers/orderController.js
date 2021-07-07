import asyncHandler from 'express-async-handler'
import Order from '../models/OrderModel.js'

// @desc Create New Orders
// @route POST /api/orders
// @access Private

export const addOrderItems = asyncHandler( async(req, res, next) => {

    const { 
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body

    if(orderItems && orderItems.length === 0 ){
        res.status(400)
        const error = new Error('No ordered items')
        next(error)
    } else {
        const order = new Order({
        user: req.user?._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)

    }
})



// @desc Get order details
// @route GET /api/orders/:id
// @access Private

export const getOrderDetails = asyncHandler( async(req, res) => {

    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(order){
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})