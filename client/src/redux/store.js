import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer } from './reducers/productListReducer'
import { productDetailsReducer } from './reducers/productDetailsReducer'
import { cartReducer } from './reducers/cartReducer'
import { userLoginReducer} from './reducers/authReducers'

const middleware = [thunk]

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
})


const cartItemsFromStorage = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
const userDataFromStorage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null

const initialState = {
    cart: { cartItems: cartItemsFromStorage},
    userLogin: { userData: userDataFromStorage },
}


const store = createStore(
    reducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store