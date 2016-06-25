import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.state.added.value}</div>
                <div>{this.props.state.multiplied.value}</div>
                <button onClick={() => this.props.onAdd(1)}>Add 1</button>
                <button onClick={() => this.props.onAdd(10)}>Add 10</button>
                <button onClick={() => this.props.onMultiply(2)}>Multiply by 2</button>
                <button onClick={() => this.props.onMultiply(10)}>Multiple by 10</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (p) => dispatch({ type: 'ADD', payload: p }),
        onMultiply: (p) => dispatch({ type: 'MULTIPLY', payload: p }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
