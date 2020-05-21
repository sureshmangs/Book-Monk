import { FETCH_BOOKS, MESSAGE, FETCH_BOOK_INFO } from './types';
import axios from 'axios';


export const fetchBooks = () => {

    return async dispatch => {
        try {
            axios.get('/books/getBooks')
                .then((response) => {
                    dispatch({
                        type: FETCH_BOOKS,
                        payload: response.data
                    })
                })
                .catch(err => console.log(err))

        } catch (err) {
            //console.log('Some error occured')
            dispatch({
                type: MESSAGE
            })
        }
    }
}


export const fetchBookInfo = (id) => {
    return async dispatch => {
        try {
            axios.get('/books/getBookInfo', {
                params: {
                    id: id
                }
            })
                .then((response) => {
                    dispatch({
                        type: FETCH_BOOK_INFO,
                        payload: response.data
                    })
                })
                .catch(err => console.log(err))

        } catch (err) {
            //console.log('Some error occured')
            dispatch({
                type: MESSAGE
            })
        }
    }
}