import {
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
} from '../constants/authConstants'

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true }

    case USER_DELETE_SUCCESS:
      return { loading: false, success: true }

    case USER_DELETE_FAILURE:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
