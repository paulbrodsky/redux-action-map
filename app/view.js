import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { calculatorCommands } from './commands';

class View extends React.Component {
  render() {
    const { add, multiply, state } = this.props;
    return (
      <div>
        <div>{state.calculator.value}</div>
        <div>{state.calculator.isCalculating ? 'Calculating' : ''}</div>
        <button disabled={state.calculator.isCalculating} onClick={() => add(1)}>Add 1</button>
        <button disabled={state.calculator.isCalculating} onClick={() => add(10)}>Add 10</button>
        <button disabled={state.calculator.isCalculating} onClick={() => multiply(2)}>Multiply by 2</button>
        <button disabled={state.calculator.isCalculating} onClick={() => multiply(10)}>Multiple by v10</button>
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

export default connect(mapStateToProps, calculatorCommands)(View);
