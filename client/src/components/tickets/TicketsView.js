import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTickets } from "../../actions/tickets";
import Tickets from "./Tickets";
import Spinner from "../layouts/Spinner";
import Paginate from "./Paginate";

const TicketsView = ({
    getTickets,
    tickets: { page, pages, loading },
}) => {
    useEffect(() => {
        if (pages.length === 0) {
            getTickets();
        } 
    }, [getTickets, pages.length]);

    return loading ? (
        <Spinner></Spinner>
    ) : pages.length > 0 ? (
        <Fragment>
            <Paginate></Paginate>
            <Tickets tickets={pages[page] ? pages[page] : undefined}></Tickets>
            <Paginate></Paginate>
        </Fragment>
    ) : <Fragment></Fragment>;
};

TicketsView.propTypes = {
    getTickets: PropTypes.func.isRequired,
    tickets: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    tickets: state.tickets,
});

export default connect(mapStateToProps, { getTickets })(
    TicketsView
);
