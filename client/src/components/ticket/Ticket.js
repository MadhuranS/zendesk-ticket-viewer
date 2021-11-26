import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const Ticket = ({ ticket }) => {
    return (
            <Card
                bg="success"
                text="white"
                style={{ width: "100%" }}
                border = "success"
                className="mb-2"
            >
                <Card.Header>Ticket Id: {ticket.id}</Card.Header>
                <Card.Body>
                    <Card.Title> {ticket.subject} </Card.Title>
                    <Card.Text>{ticket.description}</Card.Text>
                </Card.Body>
            </Card>
    );
};

Ticket.propTypes = {
    ticket: PropTypes.object.isRequired,
};

export default Ticket;
