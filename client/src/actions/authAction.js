import { AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_ERROR, AUTH_SIGN_OUT } from './types';
import axios from 'axios';


export const signOut = () => {
    return dispatch => {
        localStorage.clear();
        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    }
}



export const checkAuth = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('JWT_TOKEN');
            if (token) {
                await axios.get('/users/status', {
                    headers: {
                        'Authorization': `${token}`
                    }
                });

                dispatch({
                    type: AUTH_SIGN_IN
                });
            } else {
                console.log('User is not authenticated');
            }

        } catch (err) {
            console.log('error', err)
        }
    };
}



export const oauthGoogle = data => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/oauth/google', {
                access_token: data
            });
            localStorage.setItem('JWT_TOKEN', res.data.token);
            dispatch({
                type: AUTH_SIGN_UP,
                payload: { "jwtToken": res.data.token, "accessToken": data }
            });

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: "A problem has occured in SignUp"
            });
        }
    };
}
