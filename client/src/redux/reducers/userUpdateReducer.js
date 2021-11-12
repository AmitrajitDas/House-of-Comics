import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_RESET,
} from '../constants/authConstants'

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true }

    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true }

    case USER_UPDATE_FAILURE:
      return { loading: false, error: action.payload }

    case USER_UPDATE_RESET:
      return { user: {} }

    default:
      return state
  }
}
