import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actionTypes as calculatorActionTypes } from './calculator';

class View extends React.Component {
  render() {
    const { add, multiply, state } = this.props;
    return (
      <div>
        <div>{state.calculator.value}</div>
        <button onClick={() => add(1)}>Add 1</button>
        <button onClick={() => add(10)}>Add 10</button>
        <button onClick={() => multiply(2)}>Multiply by 2</button>
        <button onClick={() => multiply(10)}>Multiple by 10</button>
      </div>
    );
  }
}

View.propTypes = {
  add: PropTypes.func.isRequired,
  multiply: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (payload) => dispatch({ type: calculatorActionTypes.add, payload }),
    multiply: (payload) => dispatch({ type: calculatorActionTypes.multiply, payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
