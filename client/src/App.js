import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Tickets from "./components/tickets/Tickets";
//imports for Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => (
    <Provider store ={store}>
        <Router>
            <Fragment>
                <Tickets></Tickets>
                <Routes></Routes>
            </Fragment>
        </Router>
    </Provider>
);

export default App;
