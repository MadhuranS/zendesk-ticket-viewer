import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { setAlert } from "../../actions/alert";
import { getTickets } from "../../actions/tickets";
import Tickets from "./Tickets";
import Spinner from "../layouts/Spinner";

const Pagination = ({ getTickets, tickets: { pages, loading } }) => {
    useEffect(() => {
        getTickets();
    }, [getTickets]);

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    return loading ? (
        <Spinner></Spinner>
    ) : (
        <Fragment>
            <Tickets tickets={pages[currentPage]}></Tickets>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={Math.min(5, pages.length)}
                pageCount={pages.length}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            ></ReactPaginate>
        </Fragment>
    );
};

Pagination.propTypes = {
    setAlert: PropTypes.func.isRequired,
    getTickets: PropTypes.func.isRequired,
    tickets: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    tickets: state.tickets,
});

export default connect(mapStateToProps, { setAlert, getTickets })(Pagination);
