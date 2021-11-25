import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";

const Tickets = ({ setAlert }) => {
    setAlert("No tickets found", 'danger')
    return <div>Hi!</div>;
};

Tickets.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Tickets);
