import { GET_TICKET, GET_TICKETS, TICKETS_ERROR, SELECT_PAGE, LOAD_TICKETS } from "../actions/types";

const initialState = {
    pages: [],
    page: 0,
    ticket: null,
    loading: true,
    error: {},
};

export default function ticketsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_TICKETS:
            return {
                ...state,
                loading: true,
            }
        case GET_TICKETS:
            return {
                ...state,
                pages: payload,
                page: 0,
                loading: false,
            };
        case GET_TICKET:
            return {
                ...state,
                ticket: payload,
                loading: false
            }
        case TICKETS_ERROR:
            return {
                ...state,
                error: payload,
                ticket: null,
                pages: [],
                page: 0,
                loading: false,
            };
        case SELECT_PAGE:
            return {
                ...state,
                page: payload,
            }
        default:
            return state;
    }
}
