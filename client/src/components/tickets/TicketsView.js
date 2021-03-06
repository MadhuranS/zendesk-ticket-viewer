import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTickets } from "../../actions/tickets";
import Tickets from "./Tickets";
import Spinner from "../layouts/Spinner";
import Pagination from "./Pagination";
import { itemsPerPage } from "../../settings";

//wrapper component that renders all tickets and pagination tool, 
export const TicketsView = ({
    getTickets,
    tickets: { itemOffset, allTickets, loading, pageCount },
}) => {
    useEffect(() => {
        getTickets(); //fetch all tickets everytime the page reloads
    }, [getTickets]);

    //display loading sign when loading or nothing if no tickets exist
    //Render all tickets that fall within the offset and the number of tickets per page
    return loading ? (
        <Spinner data-test="Loading"></Spinner>
    ) : pageCount > 0 ? (
        <Fragment>
            <Pagination data-test="Pagination"></Pagination>
            <Tickets
                data-test="Tickets"
                tickets={
                    itemOffset < allTickets.length
                        ? allTickets.slice(
                              itemOffset,
                              itemOffset + itemsPerPage
                          )
                        : undefined
                }
            ></Tickets>
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
