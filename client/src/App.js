import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Pagination from "./components/tickets/Pagination";
//imports for Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "./components/layouts/Alert";

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <div className="container">
                    <Alert></Alert>
                    <Pagination></Pagination>
                </div>
                <Routes></Routes>
            </Fragment>
        </Router>
    </Provider>
);

export default App;
