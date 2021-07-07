import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE } from '../constants/authConstants'
// import { getUserProfile } from '../../api/users'
import axios from 'axios';

export const userDetailsAction = (id) => async(dispatch, getState) => {

    try {
        
        dispatch({ 
            type: USER_DETAILS_REQUEST,
        })

        const { userLogin: { userData } } = getState()

        const config = {

        headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userData.token} `, 
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/auth/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
            })
    

    } catch (error) {
        
        dispatch({ 
            type: USER_DETAILS_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}