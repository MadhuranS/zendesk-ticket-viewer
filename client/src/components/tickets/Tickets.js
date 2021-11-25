import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { getTickets } from "../../actions/tickets";
import Spinner from "../layouts/Spinner";

const Tickets = ({ setAlert, getTickets, tickets: { tickets, loading } }) => {


    useEffect(() => {
        getTickets();
    }, [getTickets]);
    
    return <div>Hi!</div>;
};

Tickets.propTypes = {
    setAlert: PropTypes.func.isRequired,
    getTickets: PropTypes.func.isRequired,
    tickets: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    tickets: state.tickets,
});

export default connect(mapStateToProps, { setAlert, getTickets })(Tickets);
