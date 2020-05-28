import { FETCH_USER_PROFILE, EDIT_USER_PROFILE } from '../actions/types';

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
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
