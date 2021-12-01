import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTickets } from "../../actions/tickets";
import Tickets from "./Tickets";
import Spinner from "../layouts/Spinner";
import Pagination from "./Pagination";
import { itemsPerPage } from "../../settings";

export const TicketsView = ({ getTickets, tickets: { itemOffset, allTickets, loading } }) => {
    useEffect(() => {
        getTickets();
    }, [getTickets]);

    return loading ? (
        <Spinner data-test="Loading"></Spinner>
    ) : allTickets.length > 0 ? (
        <Fragment>
            <Pagination data-test="Pagination"></Pagination>
            <Tickets data-test="Tickets" tickets={itemOffset < allTickets.length ? allTickets.slice(itemOffset, itemOffset + itemsPerPage) : undefined}></Tickets>
            <Pagination data-test="Pagination"></Pagination>
        </Fragment>
    ) : (
        <Fragment></Fragment>
    );
};

TicketsView.propTypes = {
    getTickets: PropTypes.func.isRequired,
    tickets: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    tickets: state.tickets,
});

export default connect(mapStateToProps, { getTickets })(TicketsView);
