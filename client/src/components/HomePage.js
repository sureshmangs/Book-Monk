import React, { Component } from 'react';
import BookContainer from './BookContainer';
import BookCategories from './BookCategories';

class HomePage extends Component {
    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-3">
                        <BookCategories />
                    </div>
                    <div className="col-md-9">
                        <h3 className="mb-4">Trending Now in Books</h3>
                        <BookContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
