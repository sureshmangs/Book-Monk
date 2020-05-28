import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (OrigonalComponent) => {
    class MixedComponent extends Component {

        checkAuth() {
            if (!this.props.isAuth && !this.props.jwtToken) {
                // console.log('user not authenticated')
                this.props.history.push('/');
            }
        }

        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate() {
            this.checkAuth();
        }

        render() {
            return <OrigonalComponent />
        }
    }

    const mapStateToProps = state => {
        return {
            isAuth: state.auth.isAuth,
            jwtToken: state.auth.jwtToken
        }
    }

    return connect(mapStateToProps)(MixedComponent);
}
