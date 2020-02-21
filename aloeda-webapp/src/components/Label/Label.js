import React from "react";
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

class Label extends React.Component {
    render() {
        return <div>
            <span>discovered count: {this.props.count}</span>
        </div>
    }
}

export default connect(mapStateToProps)(Label);