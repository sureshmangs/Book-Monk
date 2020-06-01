import { FETCH_BOOKS, FETCH_BOOK_INFO, FETCH_CATEGORIES } from './types';
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
            console.log('Some error occured', err)
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
            console.log('Some error occured', err)
        }
    }
}



export const fetchCategories = () => {

    return async dispatch => {
        try {
            axios.get('/books/getcategories')
                .then((response) => {
                    dispatch({
                        type: FETCH_CATEGORIES,
                        payload: response.data
                    })
                })
                .catch(err => console.log(err))

        } catch (err) {
            console.log('Some error occured', err)
        }
    }
}
