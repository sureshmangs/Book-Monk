import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/searchBooksAction';

import BookCard from './BookCard';
import BookCategories from './BookCategories';

class SearchBooks extends Component {
    componentDidMount() {
        this.props.searchBooks(this.props.match.params.searchData);
    }
    render() {
        return (
            <div className="m-5">
                <div className="row">
                    <div className="col-md-2 d-none d-md-block">
                        <BookCategories />
                    </div>
                    {
                        this.props.books.length ? <div className="col-sm-10 col-md-9 col-12">
                            <h3 className="mb-4 font-italic">Search Results for <code>{this.props.match.params.searchData}</code></h3>
                            <div className="container">

                                <div className="row">
                                    {this.props.books.map((book, index) => <BookCard key={index} book={book} />)}
                                </div>
                            </div>
                        </div> : <div className="col-sm-10 col-md-9 col-12">
                                <h3 className="mb-4 font-italic">Search Results for <code>{this.props.match.params.searchData}</code></h3>
                                <div className="container">
                                    <div className="row">
                                        <h5 className="text-center"> <code>:(</code> Your search result doesn't matched to any books</h5>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.searchBook.books
    }
}

export default connect(mapStateToProps, actions)(SearchBooks)
