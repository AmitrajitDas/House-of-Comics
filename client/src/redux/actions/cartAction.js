import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants'
import { getProductDetails } from '../../api/products'

export const addToCartAction = (id, qty) => async(dispatch, getState) => {

    const { data } = await getProductDetails(id)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            productId: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCartAction = (id) => async (dispatch, getState) => {

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems))

}

export const saveShippingAddressAction = (data) => async (dispatch) => {

    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))

}

export const savePaymentMethodAction = (data) => async (dispatch) => {

    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))

}