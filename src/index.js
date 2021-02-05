import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './redux/store.js'
import './scss/app.scss';
import {Provider} from "react-redux";

console.log(store);

ReactDOM.render(
    // <React.StrictMode>
        <Router>
            <Provider store={store}>
            <App />
            </Provider>
        </Router>,
    //</React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
