import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {

    switch(action.type){

        case CART_ADD_ITEM: 
            const item = action.payload

            const isItem = state.cartItems.find(x => x.productId === item.productId)

            if(isItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x => x.productId === isItem.productId ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        
        case CART_REMOVE_ITEM: {

            const item = action.payload

            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.productId !== item)
            }
        }

        case CART_SAVE_SHIPPING_ADDRESS: {

            return {
                ...state,
                shippingAddress: action.payload,
            }
        }

        default:
            return state
    }
}