import {    ORDER_PAYMENT_REQUEST, 
            ORDER_PAYMENT_SUCCESS, 
            ORDER_PAYMENT_FAILURE,
            ORDER_PAYMENT_RESET 
        } from '../constants/orderConstants'
        

export const orderPaymentReducer = ( state = {}, action) => {
    switch(action.type){
        case ORDER_PAYMENT_REQUEST:
            return {...state, loading: true }

        case ORDER_PAYMENT_SUCCESS:
            return { loading: false, success: true }

        case ORDER_PAYMENT_FAILURE:
            return { loading: false, error: action.payload }

        case ORDER_PAYMENT_RESET:
            return {}
            
        default:
            return state
    }
}