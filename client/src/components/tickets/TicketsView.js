import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTickets } from "../../actions/tickets";
import Tickets from "./Tickets";
import Spinner from "../layouts/Spinner";
import Pagination from "./Pagination";

export const TicketsView = ({ getTickets, tickets: { page, pages, loading } }) => {
    useEffect(() => {
        getTickets();
    }, [getTickets]);

    return loading ? (
        <Spinner data-test="Loading"></Spinner>
    ) : pages.length > 0 ? (
        <Fragment>
            <Pagination data-test="Pagination"></Pagination>
            <Tickets data-test="Tickets" tickets={pages[page] ? pages[page] : undefined}></Tickets>
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
