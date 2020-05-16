import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Age: <span> {this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeIncrement}>IncrementAge</button>
        <button onClick={this.props.onAgeDecrement}>DecrementAge</button>
        <hr />
        <div>History </div>
        <div>
          <ul>
            {this.props.history.map((el) => (
              <li key={el.id} onClick={() => this.props.onDelItem(el.id)}>
                {el.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeIncrement: () => dispatch({ type: "AGE_INCREMENT", value: 1 }),
    onAgeDecrement: () => dispatch({ type: "AGE_DECREMENT", value: 1 }),
    onDelItem: (id) => dispatch({ type: "DEL_ITEM", key: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
