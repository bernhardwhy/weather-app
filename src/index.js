import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const startApp = () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();
};

if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
} else {
    startApp();
}
