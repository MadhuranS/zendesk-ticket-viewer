import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Tickets from "./components/tickets/Tickets";
//imports for Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Alert from "./layouts/Alert";

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <div className="container">
                    <Alert></Alert>
                    <Tickets></Tickets>
                </div>
                <Routes></Routes>
            </Fragment>
        </Router>
    </Provider>
);

export default App;
