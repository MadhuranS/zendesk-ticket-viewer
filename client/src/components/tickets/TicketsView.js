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
        getTickets();
    }, [getTickets]);

    return loading ? (
        <Spinner></Spinner>
    ) : (
        <Fragment>
            <Paginate></Paginate>
            <Tickets tickets={pages[page] ? pages[page] : undefined}></Tickets>
            <Paginate></Paginate>
        </Fragment>
    );
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
