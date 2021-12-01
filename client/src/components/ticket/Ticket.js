import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { getTicket } from "../../actions/tickets";
import Spinner from "../layouts/Spinner";

const statusColors = {
    new: "warning",
    open: "info",
    pending: "primary",
    hold: "dark",
    solved: "success",
    closed: "light",
};

//single view ticket component with button to go back to all tickets
export const Ticket = ({ getTicket, tickets: { ticket, loading } }) => {
    const { id } = useParams();
    //on render, ticket is fetched
    useEffect(() => {
        getTicket(id);
    }, [getTicket, id]);
    return loading ? (
        <Spinner data-test="Loading"></Spinner>
    ) : ticket === null ? (
        <Fragment>
            <Link
                data-test="Ticket-Link"
                className="btn btn-primary my-1"
                to="/"
            >
                Go back to all tickets
            </Link>
        </Fragment>
    ) : (
        <Fragment>
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
                <Card.Header>Created at: {ticket.created_at}</Card.Header>
                <Card.Header>Lasted updated: {ticket.updated_at}</Card.Header>
                <Card.Body data-test="Ticket-Body">
                    <Card.Title> {ticket.subject} </Card.Title>
                    <Card.Subtitle>
                        Tags:{" "}
                        {ticket.tags && ticket.tags.map((tag) => (
                            <li className="tag">{tag}, </li>
                        ))}
                    </Card.Subtitle>
                    <Card.Text>{ticket.description}</Card.Text>
                </Card.Body>
                <Card.Footer>Requested by: {ticket.requester_id}</Card.Footer>
                <Card.Footer data-test="Ticket-Footer">
                    Status: {ticket.status}
                </Card.Footer>
            </Card>
            <Link
                data-test="Ticket-Link"
                className="btn btn-primary my-1"
                to="/"
            >
                Go back to all tickets
            </Link>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    tickets: state.tickets,
    getTicket: PropTypes.func.isRequired,
});

Ticket.propTypes = {
    getTicket: PropTypes.func.isRequired,
    tickets: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getTicket })(Ticket);
