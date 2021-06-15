import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCartAction } from '../../redux/actions/cartAction'
import { useStyles } from './styles'

const CartScreen = ({ match, location, history }) => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    console.log(cart)

    useEffect(() => {
        if(productId){
            dispatch(addToCartAction(productId, qty))
        }
    },[dispatch, productId, qty])

    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
