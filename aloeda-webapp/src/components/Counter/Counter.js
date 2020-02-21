import React from "react";
import {connect} from 'react-redux';
import {increment, decrement} from '../Utils/action';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

class Counter extends React.Component {
    decrement = () => {
        this.props.decrement();
    };

    increment = () => {
        this.props.increment();
    };

    render() {
        return <div>
            <button onClick={this.decrement}>-</button>
            &nbsp; <span>{this.props.count}</span> &nbsp;
            <button onClick={this.increment}>+</button>
        </div>
    }
}

const mapDispatchToProps = {
    decrement,
    increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);