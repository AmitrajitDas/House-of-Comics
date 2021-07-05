import asyncHandler from 'express-async-handler'
import Order from '../models/OrderModel.js'

// @desc Create New Orders
// @route POST /api/orders
// @access Private

export const addOrderItems = asyncHandler( async(req, res) => {

    const { 
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body

    if(orderItems && orderItems.length ===0 ){
        res.status(400)
        throw new Error('No ordered items')
        return
    }

    const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    })

    const createdOrder = order.save()

    res.status(201).json(createdOrder)

})