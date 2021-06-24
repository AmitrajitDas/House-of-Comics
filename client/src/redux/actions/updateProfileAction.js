import { USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE } from '../constants/authConstants'
// import { getUserProfile } from '../../api/users'
import axios from 'axios';

export const updateProfileAction = (profileData) => async(dispatch, getState) => {

    try {
        
        dispatch({ 
            type: USER_PROFILE_REQUEST,
        })

        const { userLogin: { userData } } = getState()

        const config = {

        headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userData.token} `, 
            },
        }

        const { data } = await axios.put('http://localhost:5000/api/auth/profile', profileData, config)

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
            })
    

    } catch (error) {
        
        dispatch({ 
            type: USER_PROFILE_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}