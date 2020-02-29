import React from 'react'
import {navigateToUrl} from 'single-spa'
import ErrorBoundary from "../error/error-boundry";

class NavBar extends React.Component {
    componentDidCatch(error, errorInfo) {

    }

    render() {
        return <nav>
            <ErrorBoundary hasError={false}>
                <div className="nav-wrapper">
                    <a href="/" onClick={navigateToUrl} className="brand-logo">single-spa</a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/" onClick={navigateToUrl}>Home</a></li>
                        <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
                    </ul>
                </div>
            </ErrorBoundary>
        </nav>
    }
}

export default NavBar