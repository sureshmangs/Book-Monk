import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../actions/types';

const CART_STATE = {
    items: [],
    subTotal: 0,
    total: 99
}

export default (state = CART_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let newItem = {};
            const alreadyExist = state.items.find((item) => item.book.id === action.payload.id)
            console.log('alreadyExist', alreadyExist)
            if (alreadyExist) {
                newItem = alreadyExist;
                newItem.quantity += 1;
                return {
                    ...state,
                    subTotal: state.subTotal + newItem.book.price,
                    total: state.total + newItem.book.price
                }
            } else {
                newItem.book = action.payload;
                newItem.quantity = 1;
                return {
                    ...state,
                    items: [...state.items, newItem],
                    subTotal: state.subTotal + newItem.book.price,
                    total: state.total + newItem.book.price
                }
            }

        case INCREMENT_QUANTITY:
            console.log('inc reducerS')
            let book = state.items.find((item) => item.book.id === Number(action.payload));

            if (book) {
                let newItem = {};
                newItem = book;
                newItem.quantity += 1;
                return {
                    ...state,
                    subTotal: state.subTotal + newItem.book.price,
                    total: state.total + newItem.book.price
                }
            } else {
                return {
                    ...state
                }
            }

        case DECREMENT_QUANTITY:
            console.log('dec reducer')
            let bookToDel = state.items.find((item) => item.book.id === Number(action.payload));
            console.log('book to del', bookToDel)
            if (bookToDel) {
                let newItem = {};
                newItem = bookToDel;
                newItem.quantity -= 1;
                return {
                    ...state,
                    subTotal: state.subTotal - newItem.book.price,
                    total: state.total - newItem.book.price
                }
            } else {
                return {
                    ...state
                }
            }
        default:
            return {
                ...state
            }
    }
}