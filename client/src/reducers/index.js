import { combineReducers } from 'redux';
import bookReducer from './bookReducer';



const rootReducer = combineReducers({
    book: bookReducer
})

export default rootReducer;