import { FETCH_USER_PROFILE, EDIT_USER_PROFILE, SET_USER_ORDERS } from '../actions/types';

const USER_PROFILE_DEFAULT_STATE = {
    userProfile: {},
    orders: []
}

export default (state = USER_PROFILE_DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload[0]
            }
        case EDIT_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload[0]
            }
        case SET_USER_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
