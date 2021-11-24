import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAILURE,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILURE,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAILURE,
} from '../constants/productConstants'
import axios from 'axios'

export const productListAction =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })

      const { data } = await axios.get(
        `${process.env.REACT_APP_DEV_API}/products?keyword=${keyword}`
      )

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(
      `${process.env.REACT_APP_DEV_API}/products/${id}`
    )

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const productDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.delete(
      `${process.env.REACT_APP_DEV_API}/products/${id}`,
      config
    )

    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const productCreateAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    }

    const { data } = await axios.post(
      `${process.env.REACT_APP_DEV_API}/products`,
      {},
      config
    )

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const productUpdateAction = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token}`,
      },
    }

    const { data } = await axios.put(
      `${process.env.REACT_APP_DEV_API}/products/${product._id}`,
      product,
      config
    )

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const productReviewCreateAction =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      })

      const {
        userLogin: { userData },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },
      }

      await axios.post(
        `${process.env.REACT_APP_DEV_API}/products/${productId}/reviews`,
        review,
        config
      )

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
