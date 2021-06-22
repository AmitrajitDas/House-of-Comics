import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from '../constants/authConstants'
import { userLogin } from '../../api/users'

export const userLoginAction = (email, password) => async(dispatch) => {

    try {
        
        dispatch({ 
            type: USER_LOGIN_REQUEST,
        })

        const { data } = await userLogin(email, password)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userData', JSON.stringify(data))

    } catch (error) {
        
        dispatch({ 
            type: USER_LOGIN_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })

    }
}

export const userLogoutAction = () => async (dispatch) => {

    localStorage.removeItem('userData')
    dispatch({ type: USER_LOGOUT })
}