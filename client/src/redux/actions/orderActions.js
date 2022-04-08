import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_USERLIST_REQUEST,
  ORDER_USERLIST_SUCCESS,
  ORDER_USERLIST_FAILURE,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_PAYMENT_REQUEST,
  ORDER_PAYMENT_SUCCESS,
  ORDER_PAYMENT_FAILURE,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAILURE,
} from '../constants/orderConstants'
import axios from 'axios'

export const orderCreateAction = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
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

    const { data } = await axios.post(
      `${process.env.REACT_APP_PROD_API}/orders`,
      order,
      config
    )

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const orderDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_PROD_API}/orders/${id}`,
      config
    )

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const orderUserListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_USERLIST_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_PROD_API}/orders/myorders`,
      config
    )

    dispatch({
      type: ORDER_USERLIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_USERLIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const orderListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_PROD_API}/orders`,
      config
    )

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const orderPaymentAction =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_PAYMENT_REQUEST,
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
        `${process.env.REACT_APP_PROD_API}/orders/${orderId}/payment`,
        paymentResult,
        config
      )

      dispatch({
        type: ORDER_PAYMENT_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: ORDER_PAYMENT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const orderDeliverAction = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DELIVER_REQUEST,
    })

    const {
      userLogin: { userData },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token} `,
      },
    }

    const { data } = await axios.put(
      `${process.env.REACT_APP_PROD_API}/orders/${orderId}/delivery`,
      {},
      config
    )

    dispatch({
      type: ORDER_DELIVER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
