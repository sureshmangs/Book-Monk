import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavCategories extends Component {
    render() {
        return (
            <div className=" bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
                    <Link className="navbar-brand ml-5" to="/"><i className="fa fa-home "></i></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mr-3">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="q#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Books</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <ul>
                                        <li className="dropdown-item">More Books To Come</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/notfound">New Arrival</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/notfound">Pre-Order</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/notfound">Best Sellers</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/notfound">Featured Authors</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default NavCategories
