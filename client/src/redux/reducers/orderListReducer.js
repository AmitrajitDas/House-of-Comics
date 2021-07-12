import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_RESET,
} from '../constants/orderConstants'

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
