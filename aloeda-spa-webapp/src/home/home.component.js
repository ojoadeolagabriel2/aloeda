import React from "react";
import Label from "../label/label_redux";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => {
    return <div className="container">
        <Provider store={store}>
            <Label message="You are welcome now.."/>
        </Provider>
    </div>
};

export default App