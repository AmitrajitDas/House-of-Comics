import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAILURE } from '../constants/orderConstants'
import axios from 'axios';

export const orderCreateAction = (order) => async(dispatch, getState) => {

    try {
        
        dispatch({ 
            type: ORDER_CREATE_REQUEST,
        })

        const { userLogin: { userData } } = getState()

        const config = {
            headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userData.token} `, 
                },
        }

        const { data } = await axios.post('http://localhost:5000/api/orders', order, config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })
    

    } catch (error) {
        
        dispatch({ 
            type: ORDER_CREATE_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}