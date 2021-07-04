// import useState from "react";
import { btnClick } from '../redux/index';
import { connect } from 'react-redux';
function Button(props) {
  // props = { ...props, click: '1' }
  
  return (
    <div>
      <button onClick={props.btnClick} >{props.children}</button>
      {/* <button onClick={props.btnClick} value="*" usage="operator"> *</button> */}
{/* 
      <p>this is name : {props.name}</p>
      <p>this is number : {props.number}</p>
      <p>this is enteredNum : {props.val}</p> */}
      {/* <button onClick={()=>console.log('salam')}> radical</button>
      <button onClick={()=>console.log('salam')}> 2</button>
      <button onClick={()=>console.log('salam')}> +</button> */}
    </div>
  )
}

const mapStateToProps = state => {
 
  
  
  return {
    name: state.name,
    number: state.number,
    val: state.val,
    
  }
}

const mapDispatchToProps = dispatch => {
  // console.log(dispatch(btnClick))
  return {
    btnClick: (value) => { dispatch(btnClick(value)) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Button);
