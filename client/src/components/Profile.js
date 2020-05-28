import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userProfileAction';


class Profile extends Component {
    // componentDidMount() {
    //     this.props.fetchUserProfile();
    // }
    render() {
        const { userProfile } = this.props;
        return (
            <div className="container emp-profile">
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={userProfile.image} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
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
                            <button type="submit" className="profile-edit-btn" name="btnAddMore">Edit Profile</button>
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
                                            <p>{userProfile.id}</p>
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
                                            <p>{userProfile.country ? userProfile.add_house + ' ' + userProfile.add_street + ' ' + userProfile.add_city + ' ' + userProfile.add_state + ' ' + userProfile.add_country : 'Unavailable'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Date</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Order ID</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.profile.userProfile
    }
}

export default connect(mapStateToProps, actions)(Profile)