import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';



const rootReducer = combineReducers({
    book: bookReducer,
    cart: cartReducer,
    auth: authReducer
})

export default rootReducer;