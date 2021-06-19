import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/productListConstants'

import { getProducts } from '../../api/fetchProducts'

export const productListAction = () => async (dispatch) => {

    try {
        
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await getProducts()

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

    } catch (error) {
        
        dispatch({ 
            type: PRODUCT_LIST_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }

}