import React, { Fragment } from "react";
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
                        data-test="Ticket"
                        key={ticket.id}
                        bg="light"
                        text="dark"
                        style={{ width: "100%" }}
                        border={statusColors[ticket.status]}
                        className="mb-2 border-2"
                    >
                        <Card.Header data-test="Ticket-Header">
                            Ticket Id: {ticket.id}
                        </Card.Header>
                        <Card.Body data-test="Ticket-Body">
                            <Card.Title> {ticket.subject} </Card.Title>
                            <Link
                                to={`/ticket/${ticket.id}`}
                                className="btn btn-primary my-1"
                                data-test="Ticket-Link"
                            >
                                Read more
                            </Link>
                        </Card.Body>
                        <Card.Footer data-test="Ticket-Footer">
                            Status: {ticket.status}
                        </Card.Footer>
                    </Card>
                ))}
        </Fragment>
    );
};

export default Tickets;
