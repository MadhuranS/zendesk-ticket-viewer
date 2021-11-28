import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketsView from "./components/tickets/TicketsView";
//imports for Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./components/layouts/Alert";
import Ticket from "./components/ticket/Ticket";

const App = () => {
    return (
    <Provider store={store}>
        <Router>
            <Fragment>
                <div className="container">
                    <Alert></Alert>
                    <Routes>
                        <Fragment>
                            <Route path="/" element={<TicketsView/>}></Route>
                            <Route path="/ticket/:id" element={<Ticket/>}></Route>
                        </Fragment>
                    </Routes>
                </div>
            </Fragment>
        </Router>
    </Provider>
    )
};

export default App;
