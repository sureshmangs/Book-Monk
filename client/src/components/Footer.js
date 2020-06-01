import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ''
        }
    }

    handleNewsletter = e => {
        this.setState({
            email: e.target.value
        })
    }

    handleNewsletterSubmit = e => {
        e.preventDefault();
        axios.post('/users/newsletter', {
            "email": this.state.email
        })
            .then((response) => {
                ReactDOM.findDOMNode(this.refs.newsletter).style.display = 'block';
            })
            .catch(err => console.log('error is ', err))
    }

    render() {
        return (
            <div style={{ background: '#595959' }} className="pt-4 pb-4 ">
                <div className="footer-top-area">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div className="footer-left">
                                    <Link className="navbar-brand" to="/"><i className="fa fa-book text-warning "></i> <span style={{ color: 'orange' }}>Book Monk</span></Link>
                                    <p style={footerLink}>The more that you read, the more things you will know. The more that you learn, the more places you'll go</p>
                                    <ul className="navbar-nav">
                                        <li style={footerLink}><button className="btn btn-small btn-success mr-sm-2 my-sm-2  my-2 mr-1 disabled"><i className="fa fa-map-marker" ></i></button>17th Main Street, Jaipur</li>
                                        <li style={footerLink}><button className="btn btn-small btn-primary mr-sm-2 my-sm-2 my-2 mr-1 disabled"><i className="fa fa-phone" ></i></button>(+91) 123 4567 890</li>
                                        <li style={footerLink}><button className="btn btn-small btn-warning mr-sm-2 my-sm-2 my-2 mr-1 disabled"><i className="fa fa-envelope" ></i></button>info@bookmonk.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <div className="single-footer">
                                    <h4 style={footerTitle}>Information</h4>
                                    <ul className="navbar-nav">
                                        <li ><Link style={footerLink} to="/notfound" >About Us</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Delivery Information</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Privacy & Policy</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Terms & Conditions</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Manufactures</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <div className="single-footer">
                                    <h4 style={footerTitle}>My Account</h4>
                                    <ul className="navbar-nav">
                                        <li ><Link style={footerLink} to="/user_profile" >My Account</Link></li>
                                        <li ><Link style={footerLink} to="/signup" >Login</Link></li>
                                        <li ><Link style={footerLink} to="/cart" >My Cart</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Wishlist</Link></li>
                                        <li ><Link style={footerLink} to="/cart" >Checkout</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <div className="single-footer">
                                    <h4 style={footerTitle}>Shop</h4>
                                    <ul className="navbar-nav ">
                                        <li ><Link style={footerLink} to="/notfound" >Orders & Returns</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Search Terms</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Advance Search</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Affiliates</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Group Sales</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="single-footer footer-newsletter">
                                    <h4 style={footerTitle}>Our Newsletter</h4>
                                    <p style={{ color: '#fff' }}>Subscribe to our weekly Newsletter and get to know about latest books</p>
                                    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleNewsletterSubmit}>
                                        <input className="form-control mr-sm-2 my-sm-2" onChange={this.handleNewsletter} type="email" placeholder="tommy@peakyblinders.com" required />
                                        <div className="row mt-2">
                                            <button className="btn btn-success btn-small ml-3 " type="submit">SUBSCRIBE</button>
                                            <button ref="newsletter" className="btn btn-success btn-small ml-3 disabled" style={newsletter}><i className="fa fa-check"></i></button>
                                        </div>
                                    </form>
                                    <ul className="navbar-nav">
                                        <li>
                                            <a href="https://www.facebook.com"><button className="btn btn-small btn-primary mr-sm-2 my-sm-2 my-2 mr-1  "><i className="fa fa-facebook"></i></button></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com"><button className="btn btn-small btn-danger mr-sm-2 my-sm-2 my-2 mr-1 "><i className="fa fa-instagram"></i></button></a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com"><button className="btn btn-small btn-primary mr-sm-2 my-sm-2 my-2 mr-1 "><i className="fa fa-twitter"></i></button></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-bottom-left pull-left">
                                    <p style={{ color: '#fff' }}>Copyright &copy; 2020 <span><a href="https://www.github.com/sureshmangs/Book-Monk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>SURE7</a></span>. All Right Reserved.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-bottom-right pull-right">
                                    <p style={{ color: '#fff' }}>India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const footerTitle = {
    color: "orange"

}

const footerLink = {
    color: "#fff",
    textDecoration: 'none'
}

const newsletter = {
    display: 'none'
}

export default Footer
