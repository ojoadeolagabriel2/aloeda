import React from 'react';

const Label = (props) => {
    const clickHandler = () => {
        props.increment()
    };
    return <div onClick={clickHandler}>{props.message} with count: {props.count}</div>
};

export default Label