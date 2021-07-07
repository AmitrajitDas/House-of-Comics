import { combineReducers } from 'redux'

import { productListReducer } from './productListReducer'
import { productDetailsReducer } from './productDetailsReducer'
import { cartReducer } from './cartReducers'
import { userLoginReducer } from './userLoginReducer'
import { userRegisterReducer } from './userRegisterReducer'
import { userDetailsReducer } from './userDetailsReducer'
import { updateProfileReducer } from './updateProfileReducer'
import { orderCreateReducer } from './orderCreateReducer'
import { orderDetailsReducer } from './orderDetailsReducer'

const rootReducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    updateProfile: updateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer
})

export default rootReducers



