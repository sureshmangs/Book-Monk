import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/cartAction';
import { Link } from 'react-router-dom';
class Cart extends Component {

    handleIncrease = (id, quantity) => {
        console.log('inc id', id)
        console.log('inc quantity', quantity)
        this.props.incrementQuantity(id);
    }

    handleDecrease = (id, quantity) => {
        console.log('dec id', id)
        console.log('decc quantity', quantity)
        if (quantity === 1) {
            this.handleRemove(id);
        } else {
            this.props.decrementQuantity(id);
        }

    }

    handleRemove = id => {
        console.log('cart remove from cart', id)
        this.props.removeFromCart(id);
    }

    render() {
        const { items, subTotal, total } = this.props;
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
                                                                    <img src={require(`../images/${item.book.image}`)} alt="book_image" width="70" className="img-fluid rounded shadow-sm" />
                                                                    <div className="ml-3 d-inline-block align-middle">
                                                                        <h5 className="mb-0"> <Link to={'book/' + item.book.id} className="text-dark d-inline-block align-middle">{item.book.name}</Link></h5><span className="text-muted font-weight-normal font-italic d-block">{item.book.author}</span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td className="border-0 align-middle text-center"><strong>₹ {item.book.price}</strong></td>
                                                            <td className="border-0 align-middle text-center"><strong><button onClick={() => this.handleIncrease(`${item.book.id}, ${item.quantity}`)} className="btn btn-primary btn-sm mr-3"><i className="fa fa-arrow-up "></i></button>{item.quantity}<button onClick={() => this.handleDecrease(`${item.book.id}, ${item.quantity}`)} className="btn btn-primary btn-sm ml-3"><i className="fa fa-arrow-down "></i></button></strong></td>
                                                            <td className="border-0 align-middle text-center"><button className="btn btn-danger btn-sm "><i className="fa fa-trash "></i></button></td>
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
                                            <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" />
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                        <textarea name="" cols="30" rows="2" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>₹ {subTotal}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>₹ {99}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>₹ 0</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">₹ {total}</h5>
                                            </li>
                                        </ul><a href="undef" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
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

const mapStateToProps = state => {
    return {
        items: state.cart.items,
        subTotal: state.cart.subTotal,
        total: state.cart.total
    }
}

export default connect(mapStateToProps, actions)(Cart)
