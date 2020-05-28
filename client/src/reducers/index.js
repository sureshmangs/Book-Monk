import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import userProfileReducer from './userProfileReducer';




const rootReducer = combineReducers({
    book: bookReducer,
    cart: cartReducer,
    auth: authReducer,
    profile: userProfileReducer
})

export default rootReducer;