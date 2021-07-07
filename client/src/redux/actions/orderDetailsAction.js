import { ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAILURE } from '../constants/orderConstants'
import axios from 'axios';

export const orderDetailsAction = (id) => async(dispatch, getState) => {

    try {
        
        dispatch({ 
            type: ORDER_DETAILS_REQUEST,
        })

        const { userLogin: { userData } } = getState()

        const config = {
            headers: {
                    Authorization: `Bearer ${userData.token} `, 
                },
        }

        const { data } = await axios.get(`http://localhost:5000/api/orders/${id}`, config)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })
    

    } catch (error) {
        
        dispatch({ 
            type: ORDER_DETAILS_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}