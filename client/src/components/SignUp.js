import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../config/keys'

import * as actions from '../actions/index';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    async responseGoogle(res) {
        //console.log('responseGoogle is ', res);
        //console.log('typeof res ', typeof res);
        //console.log('access token is ', res.accessToken)
        //console.log('google id', res.profileObj.googleId)
        await this.props.oauthGoogle(res.accessToken);
        if (this.props.isAuth) {
            this.props.fetchUserProfile(res.profileObj.googleId);
        }
        if (!this.props.errorMessage) {
            this.props.history.push('/');
        }
    }


    render() {
        return (
            <div className="text-center mt-5 mb-5">
                <h2 style={homeHead}>Book Monk</h2>
                <h5 className='mt-5 mb-5'>Sign Up with Google</h5>
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Google"
                    scope="openid profile email"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    isSignedIn={true}

                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        accessTokenG: state.auth.accessTokenG
    }
}


const homeHead = {
    color: "#007bff",
    fontSize: "50px",
    fontWeight: "800"
}

export default connect(mapStateToProps, actions)(SignUp)