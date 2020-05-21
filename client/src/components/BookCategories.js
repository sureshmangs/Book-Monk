import React, { Component } from 'react'

class BookCategories extends Component {

    handleCategory = () => {
        console.log('in handle categorys')
    }
    render() {
        return (
            <div className="text-center">
                <ul className="list-group">
                    <li className="list-group-item bg-primary">Browse By Category</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Art and Music</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Business</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Biography</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Art and Music</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Business</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Biography</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Art and Music</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Business</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Biography</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Art and Music</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Business</li>
                    <li className="list-group-item" style={pointer} onClick={this.handleCategory}>Biography</li>

                </ul>
            </div>
        )
    }
}

const pointer = {
    cursor: 'pointer'
}

export default BookCategories
