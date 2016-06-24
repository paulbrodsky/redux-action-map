import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.state.r1}</div>
                <div>{this.props.state.r2}</div>
                <button onClick={this.props.actionA}>A</button>
                <button onClick={this.props.actionB}>B</button>
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
        actionA: () => dispatch({type: 'r1'}),
        actionB: () => dispatch({type: 'r2'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
