import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userProfileAction';

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            house: '',
            street: '',
            city: '',
            state: '',
            country: '',
            pincode: ''
        }
    }

    onChangeName = e => {
        this.setState({
            name: e.target.value
        })
    }

    onChangePhone = e => {
        this.setState({
            phone: e.target.value
        })
    }

    onChangeHouse = e => {
        this.setState({
            house: e.target.value
        })
    }

    onChangeStreet = e => {
        this.setState({
            street: e.target.value
        })
    }

    onChangeCity = e => {
        this.setState({
            city: e.target.value
        })
    }

    onChangeState = e => {
        this.setState({
            state: e.target.value
        })
    }

    onChangeCountry = e => {
        this.setState({
            country: e.target.value
        })
    }

    onChangePincode = e => {
        this.setState({
            pincode: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const userData = {
            id: this.props.userProfile.id,
            name: this.state.name,
            phone: this.state.phone,
            house: this.state.house,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            pincode: this.state.pincode
        }
        this.props.editUserProfile(userData);
    }


    render() {
        const { userProfile } = this.props;
        return (
            <div className="container emp-profile">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={userProfile.image} alt="userimage" />
                            </div>
                        </div>
                        <div className="col-md-6 mt-2">
                            <div className="profile-head">
                                <h5>Hello <i>{userProfile.name}</i></h5>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                </ul>
                            </div>
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
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" required className="form-control" onChange={this.onChangeName} placeholder={userProfile.name} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6 ">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6 ">
                                            <p>{userProfile.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" required className="form-control" onChange={this.onChangePhone} placeholder="1234567890" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" required className="form-control mt-2" onChange={this.onChangeHouse} placeholder="House Number" />
                                            <input type="text" required className="form-control mt-2" onChange={this.onChangeStreet} placeholder="Street" />
                                            <input type="text" required className="form-control mt-2" onChange={this.onChangeCity} placeholder="City" />
                                            <input type="text" required className="form-control mt-2" onChange={this.onChangeState} placeholder="State" />
                                            <input type="text" required className="form-control mt-2" onChange={this.onChangeCountry} placeholder="Country" />
                                            <input type="number" required className="form-control mt-2" onChange={this.onChangePincode} placeholder="Pincode" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Submit</button>
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

export default connect(mapStateToProps, actions)(EditProfile)