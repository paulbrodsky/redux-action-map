import React from 'react';
import { connect } from 'react-redux'
import mathCommands from './commands';

class Calculator extends React.Component {
  render() {
    const { add, multiply, state } = this.props;
    return (
      <div>
        <div>{state.added.value}</div>
        <div>{state.multiplied.value}</div>
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
    state: state,
  }
};

export default connect(mapStateToProps, mathCommands)(Calculator);
