import { FETCH_BOOKS, FETCH_BOOK_INFO, MESSAGE } from '../actions/types';


const DEFAULT_STATE = {
    books: [],
    bookInfo: {},
    loadBookSpin: true,
    msg: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case FETCH_BOOK_INFO:
            return {
                ...state,
                bookInfo: action.payload[0],
                loadBookSpin: false
            }
        case MESSAGE:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return {
                ...state
            }
    }
}