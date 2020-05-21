import React, { Component } from 'react';
import BookCard from './BookCard';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookAction';

class BookContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.books.map((book, index) => <BookCard key={index} book={book} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.book.books,
        msg: state.book.msg
    }
}

export default connect(mapStateToProps, { fetchBooks })(BookContainer)