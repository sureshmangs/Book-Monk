import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PS_KEY } from '../config/keys';
import axios from 'axios';




class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paySuccess: false,
            payFailure: false
        }
    }

    makePayment = token => {
        const items = this.props.items;
        const payableAmt = this.props.total;
        const user = this.props.userProfile;
        const body = {
            token,
            items,
            payableAmt,
            user
        }
        axios.post('users/payment', body)
            .then((response) => {
                this.props.emptyCart();
                this.setState({
                    paySuccess: true
                })
            })
            .catch((err) => {
                this.setState({
                    payFailure: true
                })
            })
    }


    handleIncrease = (id, quantity) => {
        if (quantity !== '99') {
            this.props.incrementQuantity(id);
        } else {
            // books out of stock
        }

    }

    handleDecrease = (id, quantity) => {
        if (quantity === '1') {
            this.handleRemove(id);
        } else {
            this.props.decrementQuantity(id);
        }

    }

    handleRemove = id => {
        this.props.removeFromCart(id);
    }

    handleCupoun = e => {
        //call backend any check if coupon is valid
    }

    handleCupounSubmit = e => {
        e.preventDefault();
        ReactDOM.findDOMNode(this.refs.couponMsg).style.display = 'block';
    }
    render() {
        const { items, subTotal, shipping, total } = this.props;
        if (this.state.paySuccess) {
            return <Redirect to='/payment_success' />;
        }
        if (this.state.payFailure) {
            return <Redirect to='/payment_failure' />;
        }
        return (
            <div style={{ background: '#eecda3' }}>
                <div className="px-4 px-lg-0">

                    <div className="pb-5 pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Book</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center">Price</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center">Quantity</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center">Remove</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row" className="border-0">
                                                                <div className="p-2">
                                                                    {item.book.image ? <img src={require(`../images/books_DB/${item.book.image}`)} alt="book_image" width="70" className="img-fluid rounded shadow-sm" /> : <img src={require(`../images/books_DB/no_cover.jpg`)} alt="book_image" width="70" className="img-fluid rounded shadow-sm" />}

                                                                    <div className="ml-3 d-inline-block align-middle">
                                                                        <h5 className="mb-0"> <Link to={'book/' + item.book.id} className="text-dark d-inline-block align-middle text-truncate">{item.book.name}</Link></h5><span className="text-muted font-weight-normal font-italic d-block">{item.book.author}</span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td className="border-0 align-middle text-center"><strong>₹ {item.book.price}</strong></td>
                                                            <td className="border-0 align-middle text-center"><strong><button onClick={() => this.handleIncrease(`${item.book.id}`, `${item.quantity}`)} className="btn btn-primary btn-sm mr-3"><i className="fa fa-arrow-up "></i></button>{item.quantity}<button onClick={() => this.handleDecrease(`${item.book.id}`, `${item.quantity}`)} className="btn btn-primary btn-sm ml-3"><i className="fa fa-arrow-down "></i></button></strong></td>
                                                            <td className="border-0 align-middle text-center"><button onClick={() => this.handleRemove(`${item.book.id}`)} className="btn btn-danger btn-sm "><i className="fa fa-trash "></i></button></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                        <div className="input-group mb-4 border rounded-pill p-2">
                                            <input type="text" placeholder="Apply coupon" onChange={this.handleCupoun} aria-describedby="button-addon3" className="form-control border-0" />
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="button" onClick={this.handleCupounSubmit} className="btn btn-danger px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                                            </div>
                                        </div>
                                        <div style={couponMsg} ref="couponMsg">Invalid Coupon</div>
                                    </div>
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                        <textarea onChange={this.handleSellerInstructions} name="" cols="30" rows="2" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>₹ {subTotal}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>₹ {total ? shipping : 0}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>₹ 0</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">₹ {total}</h5>
                                            </li>
                                        </ul>
                                        {/* <Link to='/checkout' className="text-decoration-none"><button className="btn btn-danger rounded-pill py-2 btn-block text-decoration-none">Procceed to checkout</button></Link>
                                         */}
                                        <StripeCheckout
                                            stripeKey={STRIPE_PS_KEY}
                                            token={this.makePayment}
                                            name="Book Monk"
                                            currency="INR"
                                            billingAddress={true}
                                            amount={total * 100} >
                                            <button className="btn btn-large btn-danger ">Procceed to checkout</button>
                                        </StripeCheckout>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const couponMsg = {
    textAlign: 'center',
    padding: '10px',
    background: '#28a745',
    color: '#fff',
    marginBottom: '10px',
    display: 'none'
}

const mapStateToProps = state => {
    return {
        items: state.cart.items,
        subTotal: state.cart.subTotal,
        shipping: state.cart.shipping,
        total: state.cart.total,
        userProfile: state.profile.userProfile
    }
}

export default connect(mapStateToProps, actions)(Cart)
