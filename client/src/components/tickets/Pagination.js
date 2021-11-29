import React, { Fragment} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { selectPage } from "../../actions/tickets";

export const Pagination = ({
    selectPage,
    tickets: { page, pages },
}) => {

    const handlePageClick = (event) => {
        selectPage(event.selected);
    };
    return (
        <Fragment>
            <ReactPaginate
            data-test="Pagination"
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
    selectPage: PropTypes.func.isRequired,
    tickets: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    tickets: state.tickets,
});

export default connect(mapStateToProps, { selectPage })(
    Pagination
);
