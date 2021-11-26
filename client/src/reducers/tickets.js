import { GET_TICKETS, TICKETS_ERROR, SELECT_PAGE } from "../actions/types";

const initialState = {
    pages: [],
    page: 0,
    loading: true,
    error: {},
};

export default function ticketsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_TICKETS:
            return {
                ...state,
                pages: payload,
                page: 0,
                loading: false,
            };
        case TICKETS_ERROR:
            return {
                ...state,
                pages: payload,
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
