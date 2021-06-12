import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer } from './reducers/productListReducer'

const middleware = [thunk]

const initialState = {}

const reducers = combineReducers({
    productList: productListReducer
})


const store = createStore(
    reducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store