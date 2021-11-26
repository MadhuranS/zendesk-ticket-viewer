import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Ticket from "../ticket/Ticket";

const Tickets = ({ tickets }) => {
    return (
        <Fragment>
            {tickets &&
                tickets.map((ticket) => (
                    <Ticket ticket = {ticket}>
                    </Ticket>
                ))}
        </Fragment>
    );
};

Tickets.propTypes = {
    tickets: PropTypes.array.isRequired,
};

export default Tickets;
