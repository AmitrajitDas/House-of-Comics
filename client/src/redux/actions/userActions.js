import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_DETAILS_RESET,
  USER_LIST_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from '../constants/authConstants'
import { ORDER_LIST_RESET } from '../constants/orderConstants'
import axios from 'axios'

export const userRegisterAction =
  (name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_DEV_API}/auth/signup`,
        { name, email, password },
        config
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })

      localStorage.setItem('userData', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${process.env.REACT_APP_DEV_API}/auth/login`,
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userData', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userLogoutAction = () => async (dispatch) => {
  localStorage.removeItem('userData')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })
  dispatch({ type: ORDER_LIST_RESET })
  dispatch({ type: USER_LIST_RESET })
}

export const userUpdateAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.put(
      `${process.env.REACT_APP_DEV_API}/auth/users/${user._id}`,
      user,
      config
    )

    dispatch({
      type: USER_UPDATE_SUCCESS,
    })
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_DEV_API}/auth/users/${id}`,
      config
    )

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token} `,
      },
    }

    await axios.delete(
      `${process.env.REACT_APP_DEV_API}/auth/deleteuser/${id}`,
      config
    )

    dispatch({
      type: USER_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_DEV_API}/auth/users`,
      config
    )

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateProfileAction =
  (profileData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_PROFILE_REQUEST,
      })

      const {
        userLogin: { userData },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData.token} `,
        },
      }

      const { data } = await axios.put(
        `${process.env.REACT_APP_DEV_API}/auth/profile`,
        profileData,
        config
      )

      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
