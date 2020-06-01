import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Spinner from './Spinner';

class SearchBooksInfo extends Component {

    componentDidMount() {
        this.props.searchBooksInfo(this.props.match.params.id);
    }

    handleAddToCart = () => {
        this.props.addToCart(this.props.book);
        ReactDOM.findDOMNode(this.refs.addedToCart).style.display = 'block';

    }
    render() {
        const { book, loadBookSpin } = this.props;
        let content = loadBookSpin ? <Spinner /> : < div className="container p-5 " >
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                    {book.image ? <img className=" w-100 img-fluid card card-body" src={require(`../images/books_DB/${book.image}`)} alt="Book Cover" /> : <img className=" w-100 mb-2 img-fluid card card-body" src={require(`../images/books_DB/no_cover.jpg`)} alt="Book Cover" />}
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
                            <strong>Released:</strong> {book.edition}
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
                            <strong>Price:</strong> ₹ {book.price}
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <button onClick={this.handleAddToCart} type="button" className="btn  btn-danger">Add to Cart</button>
                                <button ref="addedToCart" className="btn btn-success ml-3 disabled" style={addedToCart}>Added to Cart</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >;
        return <div>{content}</div>;
    }
}


const addedToCart = {
    display: 'none'
}

const mapStateToProps = state => {
    return {
        book: state.searchBook.bookInfo,
        loadBookSpin: state.searchBook.loadBookSpin
    }
}

export default connect(mapStateToProps, actions)(SearchBooksInfo)