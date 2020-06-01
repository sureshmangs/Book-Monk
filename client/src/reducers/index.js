import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import userProfileReducer from './userProfileReducer';
import searchBokkReducer from './searchBooksReducer';




const rootReducer = combineReducers({
    book: bookReducer,
    cart: cartReducer,
    auth: authReducer,
    profile: userProfileReducer,
    searchBook: searchBokkReducer
})

export default rootReducer;