import React, { Component } from 'react';


class BookCard extends Component {
    render() {
        const book = { title: "Demo", year: "2020", cover: "../images/bookMonk.png" }
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={require('../images/bookMonk.png')} alt="Book Cover" />
                    <h5 className="text-light card-title">
                        {book.title} - {book.year}
                    </h5>
                </div>
            </div>
        )
    }
}

export default BookCard
