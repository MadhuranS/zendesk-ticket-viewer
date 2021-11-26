import { GET_TICKETS, TICKETS_ERROR } from "../actions/types";

const initialState = {
    pages: [],
    loading: false,
    error: {},
};

export default function ticketsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_TICKETS:
            return {
                ...state,
                pages: payload,
                loading: false,
            };
        case TICKETS_ERROR:
            return {
                ...state,
                pages: payload,
                loading: false,
            };
        default:
            return state;
    }
}
