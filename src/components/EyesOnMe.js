// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    render() {
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}>
            </button>
        )
    }
    onFocus = () => console.log("Good!")
    onBlur = () => console.log("Hey! Eyes on me!")
}

export default EyesOnMe