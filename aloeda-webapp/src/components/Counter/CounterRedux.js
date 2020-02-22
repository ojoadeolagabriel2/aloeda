import Counter from "./Counter";
import {decrement, increment} from "../Utils/action";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
