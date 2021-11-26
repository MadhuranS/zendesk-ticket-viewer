import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Ticket = ({ ticket }) => {
    return (
        <Fragment>
            <div>
                <h3>Ticket ${ticket.id}</h3>
            </div>
        </Fragment>
    );
};

Ticket.propTypes = {
    ticket: PropTypes.object.isRequired,
};

export default Ticket;
