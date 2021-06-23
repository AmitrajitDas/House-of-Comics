import { combineReducers } from 'redux'

import { productListReducer } from './productListReducer'
import { productDetailsReducer } from './productDetailsReducer'
import { cartReducer } from './cartReducer'
import { userLoginReducer } from './userLoginReducer'
import { userRegisterReducer } from './userRegisterReducer'
import { userDetailsReducer } from './userDetailsReducer'

const rootReducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
})

export default rootReducers



