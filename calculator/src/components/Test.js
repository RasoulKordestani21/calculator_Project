// import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import { btnClick } from '../redux/index';
// import React from 'react'

 function Test(props) {
    console.log(props)
    return (
        <div>
            {props.name}
        </div>
    )
}

// export class Test extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {
//         number: 0,
//         data: '',
//     }
//     componentDidUpdate() {
//         console.log('salam')
//     }
//     added = async () => {
//         console.log(this.props)
//         console.log(this.props)

//       await  this.setState({ number: this.state.number + 1, data: store.getState() })
//         console.log(this.state);
//     }
//     render() {

//         return (
//             <div>
//                 <button onClick={this.added} value="2"> 2</button>
//             </div>
//         )
//     }
// }

const mapStateToProps = state => {
    return {
     ...state
    }
}


export default connect(mapStateToProps)(Test);
