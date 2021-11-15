import { combineReducers } from 'redux'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  updateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './userReducers'

import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
} from './productReducers'

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPaymentReducer,
  orderListReducer,
} from './orderReducers'
import { cartReducer } from './cartReducers'

const rootReducers = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userUpdate: userUpdateReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userList: userListReducer,
  updateProfile: updateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPayment: orderPaymentReducer,
  orderList: orderListReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  cart: cartReducer,
})

export default rootReducers
