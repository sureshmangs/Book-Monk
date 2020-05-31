import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/userProfileAction';


class Profile extends Component {
    componentDidMount() {
        this.props.getUserOrders(this.props.userProfile.id);
    }
    render() {
        const { userProfile, orders } = this.props;
        return (
            <div className="container emp-profile">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={userProfile.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <div className="profile-head">
                            <h5>Hello <i>{userProfile.name}</i></h5>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Orders</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">

                        <Link to={'edit_profile/' + userProfile.id}><button type="submit" className="profile-edit-btn" name="btnAddMore">Edit Profile</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.id.substr(0, 10)}xxxxxxx</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.phone ? userProfile.phone : 'Unavailable'}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Address</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.add_country ? userProfile.add_house + ', ' + userProfile.add_street + ', ' + userProfile.add_city + ', ' + userProfile.add_state + ', ' + userProfile.add_country : 'Unavailable'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">

                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase text-center">OrderID</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase text-center">Date</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center">Time</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center">Item</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center">Amount</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center" >Delivery</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase text-center">Phone</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order, index) => {
                                                    const items = JSON.parse(order.items);
                                                    return (
                                                        <tr key={index}>
                                                            <td className="border-0 align-middle text-center">{order.order_id}</td>
                                                            <td className="border-0 align-middle text-center" style={{ whiteSpace: 'nowrap' }}>{order.date.substr(0, 10)}</td>
                                                            <td className="border-0 align-middle text-center">{order.time.substr(0, 5)}</td>
                                                            <td className="border-0 align-middle text-center">

                                                                <table className="table ">
                                                                    <tbody>
                                                                        <tr key={index}>
                                                                            <td>Name</td>
                                                                            <td>price</td>
                                                                            <td>Qty</td>
                                                                        </tr>
                                                                        {
                                                                            items.map((item, index) => {
                                                                                return (

                                                                                    <tr key={index}>
                                                                                        <td style={{ whiteSpace: 'nowrap' }}>{item.item}</td>
                                                                                        <td>{item.price}</td>
                                                                                        <td>{item.quantity}</td>
                                                                                    </tr>

                                                                                )
                                                                            })
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td className="border-0 align-middle text-center">₹ {order.amount}</td>
                                                            <td className="border-0 align-middle text-center" style={{ whiteSpace: 'nowrap' }}>{order.delivery}</td>
                                                            <td className="border-0 align-middle text-center">{order.phone}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
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
        userProfile: state.profile.userProfile,
        orders: state.profile.orders
    }
}

export default connect(mapStateToProps, actions)(Profile)