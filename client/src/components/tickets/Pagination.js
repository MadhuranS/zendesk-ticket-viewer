import React, { Fragment, useEffect } from "react";
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
            <ReactPaginate
                className="pagination"
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pages.length}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                rcontainerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
                // eslint-disable-next-line no-unused-vars
                hrefBuilder={(page, pageCount, selected) =>
                    page >= 1 && page <= pageCount ? `/page/${page}` : "#"
                }
                hrefAllControls
                forcePage={page}
            ></ReactPaginate>
            <Tickets tickets={pages[page] ? pages[page] : undefined}></Tickets>
            <ReactPaginate
                className="pagination"
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pages.length}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                rcontainerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
                // eslint-disable-next-line no-unused-vars
                hrefBuilder={(page, pageCount, selected) =>
                    page >= 1 && page <= pageCount ? `/page/${page}` : "#"
                }
                hrefAllControls
                forcePage={page}
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
