import { GET_TICKETS, TICKETS_ERROR } from "../actions/types";

const initialState = {
    tickets: {},
    loading: false,
    error: {},
};

export default function ticketsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_TICKETS:
            return {
                ...state,
                tickets: payload,
                loading: false,
            };
        case TICKETS_ERROR:
            return {
                ...state,
                tickets: payload,
                loading: false,
            };
        default:
            return state;
    }
}
