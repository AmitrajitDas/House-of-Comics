import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_LIST_RESET,
} from '../constants/authConstants'

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true }

    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload }

    case USER_LIST_FAILURE:
      return { loading: false, error: action.payload }

    case USER_LIST_RESET:
      return { users: [] }

    default:
      return state
  }
}
