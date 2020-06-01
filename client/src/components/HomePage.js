import React, { Component } from 'react';
import BookContainer from './BookContainer';
import BookCategories from './BookCategories';

class HomePage extends Component {
    render() {
        return (
            <div className="m-5">
                <div className="row">
                    <div className="col-md-2 d-none d-md-block">
                        <BookCategories />
                    </div>
                    <div className="col-sm-10 col-md-9 col-12">
                        <h3 className="mb-4 font-italic">Trending Now in Books</h3>
                        <BookContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
