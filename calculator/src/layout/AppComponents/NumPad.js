
import React, { Component } from 'react'

export default class NumPad extends Component {
    render() {
        return (
            <div>
                <button onClick={numClicked}>1</button>
                <button onClick={plusMinessClicked}>+/-</button>
            </div>
        )
    }
}
