import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const statusColors = {
    new: "warning",
    open: "danger",
    pending: "primary",
    hold: "dark",
    solved: "success",
    closed: "light",
};

const Tickets = ({ tickets }) => {
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
                            <Link
                                to={`/ticket/${ticket.id}`}
                                className="btn btn-primary my-1"

                            >
                                Read more
                            </Link>
                        </Card.Body>
                        <Card.Footer>Status: {ticket.status}</Card.Footer>
                    </Card>
                ))}
        </Fragment>
    );
};

export default Tickets;
