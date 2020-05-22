import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';



const rootReducer = combineReducers({
    book: bookReducer,
    cart: cartReducer
})

export default rootReducer;