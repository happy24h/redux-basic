// src/App.js

//Import kết nối tới react-redux
import { connect } from 'react-redux'
//Import action dùng để dispatch
import {actionIncrement , actionDecrement} from "./actions/index";

function App( props ) {
  console.log("-----", props)
  
  return (
    <div>
      <h1>Counter {props.counter}</h1>
      <button onClick={() => props.increment(5)}>Increment</button>
      <button onClick={() => props.decrement(5)}>Decrement</button>
    </div>
  );
}

//Gán dispatch thành props
const mapDispatchToProps = (dispatch) =>  {
  return {
    increment: (number) => dispatch(actionIncrement(number)),
    decrement: (number) => dispatch(actionDecrement(number))
  }
}

//Gán giá trị của state thành props
const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer
  }
}

//Export component với két nối redux.
export default connect(mapStateToProps, mapDispatchToProps)(App)