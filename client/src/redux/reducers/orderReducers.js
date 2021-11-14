import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_RESET,
  ORDER_PAYMENT_REQUEST,
  ORDER_PAYMENT_SUCCESS,
  ORDER_PAYMENT_FAILURE,
  ORDER_PAYMENT_RESET,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { ...state, loading: true }

    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload }

    case ORDER_CREATE_FAILURE:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true }

    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload }

    case ORDER_DETAILS_FAILURE:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { ...state, loading: true }

    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload }

    case ORDER_LIST_FAILURE:
      return { loading: false, error: action.payload }

    case ORDER_LIST_RESET:
      return { Orders: [] }

    default:
      return state
  }
}

export const orderPaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAYMENT_REQUEST:
      return { ...state, loading: true }

    case ORDER_PAYMENT_SUCCESS:
      return { loading: false, success: true }

    case ORDER_PAYMENT_FAILURE:
      return { loading: false, error: action.payload }

    case ORDER_PAYMENT_RESET:
      return {}

    default:
      return state
  }
}
