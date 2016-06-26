import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createCommand } from './utils';
import { actionTypes as calculatorActionTypes } from './calculator';

class View extends React.Component {
  // static propTypes = {
  //   add: PropTypes.func.isRequired,
  //   multiply: PropTypes.func.isRequired,
  //   state: PropTypes.object.isRequired,
  // };

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

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: createCommand(dispatch, calculatorActionTypes.add),
    multiply: createCommand(dispatch, calculatorActionTypes.multiply),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
