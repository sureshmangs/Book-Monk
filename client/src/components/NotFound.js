import React, { Component } from 'react'

class NotFound extends Component {
    render() {
        return (
            <div className="container-fluid pt-5 pb-5">
                <div className="text-center">
                    <img src={require('../images/error404.jpg')} className="mx-auto img-fluid d-block " alt="NotFound" />
                </div>
            </div>
        )
    }
}

export default NotFound
