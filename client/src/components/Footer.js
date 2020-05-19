import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div style={{ background: '#595959' }} className="pt-4 pb-4 ">
                <div className="footer-top-area">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-3 col-sm-8">
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
                            <div className="col-md-2 col-sm-4">
                                <div className="single-footer">
                                    <h4 style={footerTitle}>Information</h4>
                                    <ul className="navbar-nav">
                                        <li ><Link style={footerLink} to="/aboutus" >About Us</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Delivery Information</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Privacy & Policy</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Terms & Conditions</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Manufactures</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 hidden-sm">
                                <div className="single-footer">
                                    <h4 style={footerTitle}>My Account</h4>
                                    <ul className="navbar-nav">
                                        <li ><Link style={footerLink} to="/notfound" >My Account</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Login</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >My Cart</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Wishlist</Link></li>
                                        <li ><Link style={footerLink} to="/notfound" >Checkout</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 hidden-sm">
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
                            <div className="col-md-3 col-sm-8">
                                <div className="single-footer footer-newsletter">
                                    <h4 style={footerTitle}>Our Newsletter</h4>
                                    <p style={{ color: '#fff' }}>Subscribe to our weekly Newsletter and get to know about latest books</p>
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2 my-sm-2" type="email" placeholder="thomas@peakyblinders.com" required />
                                        <button className="btn btn-success btn-small mt-2" type="submit">SUBSCRIBE</button>
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
                                    <p style={{ color: '#fff' }}>Copyright &copy; 2020 <span><a href="undefiend" style={{ textDecoration: 'none' }}>SURE7</a></span>. All Right Reserved.</p>
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
    color: "rgb(52, 58, 64)"
}

const footerLink = {
    color: "#fff",
    textDecoration: 'none'
}


export default Footer
