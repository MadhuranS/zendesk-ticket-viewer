import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

const Tickets = ({ tickets }) => {
    return (
        <Fragment>
            {tickets &&
                tickets.map((ticket) => (
                    <Card
                        key = {ticket.id}
                        bg="success"
                        text="white"
                        style={{ width: "100%" }}
                        border="success"
                        className="mb-2"
                    >
                        <Card.Header>Ticket Id: {ticket.id}</Card.Header>
                        <Card.Body>
                            <Card.Title> {ticket.subject} </Card.Title>
                            <Card.Text>{ticket.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
        </Fragment>
    );
};

export default Tickets;
