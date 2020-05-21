import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookInfo } from '../actions/bookAction';
import Spinner from './Spinner';

class Book extends Component {

    componentDidMount() {
        this.props.fetchBookInfo(this.props.match.params.id);
    }
    render() {
        const { book, loadBookSpin } = this.props;
        let content = loadBookSpin ? <Spinner /> : < div className="container p-5 " >
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <img className=" w-100 img-fluid card card-body" src={require(`../images/${book.image}`)} alt="Book Cover" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-12">
                    <h2 className="mb-4">{book.name}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Genre:</strong> {book.cat}
                        </li>
                        <li className="list-group-item">
                            <strong>Synopsis:</strong> {book.description}
                        </li>
                        <li className="list-group-item">
                            <strong>Released:</strong> {book.year}
                        </li>
                        <li className="list-group-item">
                            <strong>ISBN:</strong> {book.ISBN}
                        </li>
                        <li className="list-group-item">
                            <strong>Author:</strong> {book.author}
                        </li>
                        <li className="list-group-item">
                            <strong>Pages:</strong> {book.pages}
                        </li>
                        <li className="list-group-item">
                            <strong>Price:</strong> {book.price}
                        </li>
                        <li className="list-group-item">
                            <button className="btn btn-danger btn-sm ">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div >;
        return <div>{content}</div>;
    }
}

const mapStateToProps = state => {
    return {
        book: state.book.bookInfo,
        loadBookSpin: state.book.loadBookSpin
    }
}

export default connect(mapStateToProps, { fetchBookInfo })(Book)