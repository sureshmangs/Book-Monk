import React, { Component } from 'react';
import BookCard from './BookCard';

class BookContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        )
    }
}

export default BookContainer
