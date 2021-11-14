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

import { productListReducer, productDetailsReducer } from './productReducers'

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPaymentReducer,
  orderListReducer,
} from './orderReducers'
import { cartReducer } from './cartReducers'

const rootReducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updateProfile: updateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPayment: orderPaymentReducer,
  orderList: orderListReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
})

export default rootReducers
