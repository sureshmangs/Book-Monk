import React from 'react'
function Spinner() {
    return (
        <div>
            <img
                src={require("../images/spinner.gif")}
                style={spinStyle}
                alt='Loading...' />
        </div>
    )
}

const spinStyle = {
    width: '100px',
    margin: '200px auto 200px auto',
    display: 'block'
}
export default Spinner
