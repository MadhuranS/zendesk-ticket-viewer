import React, { Fragment } from "react";
import Ticket from "../ticket/Ticket";

const Tickets = ({ tickets }) => {
    return (
        <Fragment>
            {tickets &&
                tickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket}></Ticket>
                ))}
        </Fragment>
    );
};


export default Tickets;
