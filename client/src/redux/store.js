import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './reducers/indexReducer'

const middleware = [thunk]


const cartItemsFromStorage = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
const userDataFromStorage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
    userLogin: { userData: userDataFromStorage },
}


const store = createStore(
    rootReducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store