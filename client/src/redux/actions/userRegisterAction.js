import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from '../constants/authConstants'
import { userRegister } from '../../api/users'

export const userRegisterAction = (name, email, password) => async(dispatch) => {

    try {
        
        dispatch({ 
            type: USER_REGISTER_REQUEST,
        })

        const { data } = await userRegister(name, email, password)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userData', JSON.stringify(data))

    } catch (error) {
        
        dispatch({ 
            type: USER_REGISTER_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}