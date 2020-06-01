import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Failure extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid m-5">
                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <img src={require('../images/books_success.jpg')} alt="books" className="img-fluid " />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <h1 className="pt-3" style={{ color: 'orange' }}>Sorry</h1>
                            <hr className="w-25" />
                            <p>Your payment was unsuccessfull</p>
                            <p>We regret for any inconvenience you faced</p>
                            <Link className="btn bg-primary text-white" to="/cart">Go back to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Failure
