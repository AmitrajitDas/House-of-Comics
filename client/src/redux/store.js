import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer } from './reducers/productListReducer'
import { productDetailsReducer } from './reducers/productDetailsReducer'

const middleware = [thunk]

const initialState = {}

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})


const store = createStore(
    reducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store