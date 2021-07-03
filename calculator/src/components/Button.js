// import useState from "react";
import { btnClick } from '../redux/index';
import { connect } from 'react-redux';
function Button(props) {
  // props = { ...props, click: '1' }
  console.log(props);
  return (
    <div>
      <button onClick={props.btnClick} value="1" usage="operand"> 1</button>
      <button onClick={props.btnClick} value="*" usage="operator"> *</button>

      <p>this is name : {props.name}</p>
      <p>this is number : {props.number}</p>
      <p>this is enteredNum : {props.val}</p>
      {/* <button onClick={()=>console.log('salam')}> radical</button>
      <button onClick={()=>console.log('salam')}> 2</button>
      <button onClick={()=>console.log('salam')}> +</button> */}
    </div>
  )
}

const mapStateToProps = state => {
  let Type
  if (Number(state.val)) {
    Type = "operand";
    state={...state,Type:"operator"}
  }
  else {
    Type = "operator";
    state={...state,Type:"operator"}
  }
  
  return {
    name: state.name,
    number: state.number,
    val: state.val,
    usage:state.usage
    
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
    btnClick: (value) => { dispatch(btnClick(value)) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Button);
