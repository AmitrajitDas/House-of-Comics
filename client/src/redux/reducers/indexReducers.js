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
  productUpdateReducer,
} from './productReducers'

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPaymentReducer,
  orderUserListReducer,
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
  orderUserList: orderUserListReducer,
  orderList: orderListReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  cart: cartReducer,
})

export default rootReducers
