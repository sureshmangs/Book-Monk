import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/bookAction';

class BookCategories extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }
    render() {
        const { categories } = this.props;
        return (
            <div className="text-center">
                <ul className="list-group navbar-nav">
                    <li className="list-group-item bg-primary" key={-1}>Browse By Category</li>
                    {
                        categories.map((category, index) => {
                            return <Link to={`/searchbooks/` + category.cat} key={index} ><li key={index} className="list-group-item " >{category.cat}</li></Link>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.book.categories
    }
}

export default connect(mapStateToProps, actions)(BookCategories)
