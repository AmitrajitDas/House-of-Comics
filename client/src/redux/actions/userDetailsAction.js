import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE } from '../constants/authConstants'
import { getUserProfile } from '../../api/users'

export const userRegisterAction = (id) => async(dispatch, getState) => {

    try {
        
        dispatch({ 
            type: USER_DETAILS_REQUEST,
        })

        const { userLogin: { userData } } = getState()

        if(userData){

            const { data } = await getUserProfile(id, userData.token)

            dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
            })

        } else {

            throw new Error('Oops! Something went wrong')

        }

    } catch (error) {
        
        dispatch({ 
            type: USER_DETAILS_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}