import { AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from '../actions/types';

const initialState = {
    isAuth: false,
    jwtToken: '',
    errorMsg: '',
    accessTokenG: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SIGN_UP:
            return {
                ...state,
                isAuth: true,
                jwtToken: action.payload.jwtToken,
                accessTokenG: action.payload.accessToken,
                errorMsg: ''
            }
        case AUTH_SIGN_IN:
            return {
                ...state,
                isAuth: true,
                errorMsg: ''
            }
        case AUTH_SIGN_OUT:
            return {
                ...state,
                isAuth: false,
                jwtToken: '',
                accessTokenG: '',
                errorMsg: ''
            }
        case AUTH_ERROR:
            return {
                ...state,
                isAuth: false,
                jwtToken: '',
                errorMsg: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default authReducer;