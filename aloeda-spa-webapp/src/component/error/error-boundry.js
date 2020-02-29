import React from 'react'

const ErrorBoundary = (props) => {
    if (this.props.hasError === true) {
        return <div>error occurred</div>
    }
    return props.children
};

export default ErrorBoundary