import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
} from '../constants/authConstants'

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { ...state, loading: true }

    case USER_PROFILE_SUCCESS:
      return { loading: false, success: true, userData: action.payload }

    case USER_PROFILE_FAILURE:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
