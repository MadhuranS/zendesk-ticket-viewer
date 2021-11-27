import React, { Fragment} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getTicket } from "../../actions/tickets";

const statusColors = {
    new: "warning",
    open: "danger",
    pending: "primary",
    hold: "dark",
    solved: "success",
    closed: "light",
};

const Tickets = ({ getTicket, tickets }) => {
    const handleClick = (ticket) => {
        getTicket(ticket)
    };
    return (
        <Fragment>
            {tickets &&
                tickets.map((ticket) => (
                    <Card
                        key={ticket.id}
                        bg="light"
                        text="dark"
                        style={{ width: "100%" }}
                        border={statusColors[ticket.status]}
                        className="mb-2 border-2"
                    >
                        <Card.Header>Ticket Id: {ticket.id}</Card.Header>
                        <Card.Body>
                            <Card.Title> {ticket.subject} </Card.Title>
                            <Button
                                size="sm"
                                variant="outline-dark"
                                onClick={() => handleClick(ticket)}
                            >
                                Read more
                            </Button>
                        </Card.Body>
                        <Card.Footer>Status: {ticket.status}</Card.Footer>
                    </Card>
                ))}
        </Fragment>
    );
};

Tickets.propTypes = {
    getTicket: PropTypes.func.isRequired,
};

export default connect(null, {getTicket})(Tickets);
