import { SEARCH_BOOKS, SEARCH_BOOKS_INFO } from './types';
import axios from 'axios';

export const searchBooks = (searchData) => {

    return async dispatch => {
        try {
            //console.log('in searchbooks actions ', searchData);
            axios.get('/books/searchbooks', {
                params: {
                    searchData: searchData
                }
            })
                .then((response) => {
                    dispatch({
                        type: SEARCH_BOOKS,
                        payload: response.data
                    })
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log('Some error occured', err);
        }
    }
}




export const searchBooksInfo = (id) => {
    return async dispatch => {
        try {
            axios.get('/books/getBookInfo', {
                params: {
                    id: id
                }
            })
                .then((response) => {
                    dispatch({
                        type: SEARCH_BOOKS_INFO,
                        payload: response.data
                    })
                })
                .catch(err => console.log(err))

        } catch (err) {
            console.log('Some error occured');
        }
    }
}