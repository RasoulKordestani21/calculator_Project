import useState from "react";
import { btnClick } from '../redux/index';
import { connect } from 'react-redux';
function Button(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.btnClick}> 1</button>
      <p>this is name : {props.name}</p>
      <p>this is number : {props.number}</p>
      {/* <button onClick={()=>console.log('salam')}> radical</button>
      <button onClick={()=>console.log('salam')}> 2</button>
      <button onClick={()=>console.log('salam')}> +</button> */}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  console.log('this is state', state)
  return {

    name: state.name,
    number: state.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    btnClick: () => dispatch(btnClick())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button);
