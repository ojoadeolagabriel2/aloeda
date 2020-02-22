import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './home.component.js';

function domElementGetter() {
    return document.getElementById("home")
}

const home = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter,
});

export const bootstrap = [
    home.bootstrap,
];
export const mount = [
    home.mount,
];
export const unmount = [
    home.unmount,
];