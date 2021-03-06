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
  productListAllReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
} from './productReducers'

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPaymentReducer,
  orderUserListReducer,
  orderListReducer,
  orderDeliverReducer,
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
  orderDeliver: orderDeliverReducer,
  orderUserList: orderUserListReducer,
  orderList: orderListReducer,
  productList: productListReducer,
  productListAll: productListAllReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
})

export default rootReducers
