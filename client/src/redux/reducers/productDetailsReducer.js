import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILURE } from '../constants/productDetailsConstants'


export const productDetailsReducer = (state = { product: {} }, action) => {

    switch(action.type) {

        case PRODUCT_DETAILS_REQUEST: {
            return { loading: true, ...state}
        }

        case PRODUCT_DETAILS_SUCCESS: {
            return { loading: false, product: action.payload }
        }

        case PRODUCT_DETAILS_FAILURE: {
            return { loading: false, error: action.payload }
        }

        default: {
            return state
        }
    }

}