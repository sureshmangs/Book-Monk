import { SEARCH_BOOKS, SEARCH_BOOKS_INFO } from '../actions/types';


const SEARCH_BOOK_DEFAULT_STATE = {
    books: [],
    bookInfo: {},
    loadBookSpin: true
}

export default (state = SEARCH_BOOK_DEFAULT_STATE, action) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case SEARCH_BOOKS_INFO:
            return {
                ...state,
                bookInfo: action.payload[0],
                loadBookSpin: false
            }

        default:
            return {
                ...state
            }
    }
}