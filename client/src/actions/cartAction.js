import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, EMPTY_CART } from './types';


export const addToCart = (book) => {
    return async dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: book
        })

    }
}

export const incrementQuantity = (id) => {
    return async dispatch => {
        dispatch({
            type: INCREMENT_QUANTITY,
            payload: id
        })

    }
}


export const decrementQuantity = (id) => {
    return async dispatch => {
        dispatch({
            type: DECREMENT_QUANTITY,
            payload: id
        })

    }
}



export const removeFromCart = (id) => {
    return async dispatch => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })

    }
}


export const emptyCart = () => {
    return async dispatch => {
        dispatch({
            type: EMPTY_CART
        })

    }
}