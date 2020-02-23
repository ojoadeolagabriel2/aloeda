import React from 'react'
import {connect} from 'react-redux';
import Label from "./label";

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export function increment() {
    return {type: 'INCREMENT'};
}

const mapDispatchToProps = {
    increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Label);
