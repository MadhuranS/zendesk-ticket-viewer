import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { getTicket } from "../../actions/tickets";
import Spinner from "../layouts/Spinner";

const statusColors = {
    new: "warning",
    open: "danger",
    pending: "primary",
    hold: "dark",
    solved: "success",
    closed: "light",
};

export const Ticket = ({ getTicket, tickets: { ticket, loading } }) => {
    const { id } = useParams();
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
                <Card.Body data-test="Ticket-Body">
                    <Card.Title> {ticket.subject} </Card.Title>
                    <Card.Subtitle>
                        Created at: {ticket.created_at}, Updated at:{" "}
                        {ticket.updated_at}
                    </Card.Subtitle>
                    <Card.Text>{ticket.description}</Card.Text>
                    <Card.Subtitle>
                        Requested by: {ticket.requester_id}, Submitted by:{" "}
                        {ticket.submitter_id}
                    </Card.Subtitle>
                </Card.Body>
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
