import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartAction = (id, qty) = async(dispatch, getState) => {

    const { data } = await axios.get(`/api/products/${id}`)

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