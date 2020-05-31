import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_FROM_CART, EMPTY_CART } from '../actions/types';

const CART_STATE = {
    items: [],
    subTotal: 0,
    total: 0,
    shipping: 99
}

export default (state = CART_STATE, action) => {

    switch (action.type) {

        case ADD_TO_CART:

            let newItem = {};
            const alreadyExist = state.items.find((item) => item.book.id === action.payload.id);

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
                    total: state.total + newItem.book.price + (state.total > 0 ? 0 : state.shipping)
                }
            }



        case INCREMENT_QUANTITY:

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

            let bookToDelete = state.items.find((item) => item.book.id === Number(action.payload));
            if (bookToDelete) {
                let newItem = {};
                newItem = bookToDelete;
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



        case REMOVE_FROM_CART:
            const bookTORemove = state.items.find((item) => item.book.id === Number(action.payload))
            const updatedItems = state.items.filter((item) => item.book.id !== Number(action.payload))
            const removeShppingCharge = state.total - (bookTORemove.book.price * bookTORemove.quantity) - state.shipping;
            return {
                ...state,
                items: updatedItems,
                subTotal: state.subTotal - (bookTORemove.book.price * bookTORemove.quantity),
                total: state.total - (bookTORemove.book.price * bookTORemove.quantity) - (removeShppingCharge > 0 ? 0 : state.shipping)
            }


        case EMPTY_CART:
            return {
                ...state,
                items: [],
                subTotal: 0,
                total: 0,
            }


        default:
            return {
                ...state
            }
    }
}