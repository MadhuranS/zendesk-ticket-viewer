import React, { Fragment, useEffect} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { setAlert } from "../../actions/alert";
import { getTickets, selectPage } from "../../actions/tickets";
import Tickets from "./Tickets";
import Spinner from "../layouts/Spinner";

const Pagination = ({
    selectPage,
    getTickets,
    tickets: { page, pages, loading },
}) => {
    useEffect(() => {
        getTickets();
    }, [getTickets]);

    const handlePageClick = (event) => {
        selectPage(event.selected);
    };
    return loading ? (
        <Spinner></Spinner>
    ) : (
        <Fragment>
            <Tickets tickets={pages[page] ? pages[page] : undefined}></Tickets>
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
    selectPage: PropTypes.func.isRequired,
    tickets: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    tickets: state.tickets,
});

export default connect(mapStateToProps, { setAlert, getTickets, selectPage })(
    Pagination
);
