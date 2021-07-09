import { ORDER_PAYMENT_REQUEST, ORDER_PAYMENT_SUCCESS, ORDER_PAYMENT_FAILURE } from '../constants/orderConstants'
import axios from 'axios';

export const orderPaymentAction = (orderId, paymentResult) => async(dispatch, getState) => {

    try {
        
        dispatch({ 
            type: ORDER_PAYMENT_REQUEST,
        })

        const { userLogin: { userData } } = getState()

        const config = {
            headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userData.token} `, 
                },
        }

        const { data } = await axios.put(`http://localhost:5000/api/orders/${orderId}/payment`, paymentResult, config)

        dispatch({
            type: ORDER_PAYMENT_SUCCESS,
            payload: data
        })
    

    } catch (error) {
        
        dispatch({ 
            type: ORDER_PAYMENT_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}