import {
    GET_TICKET,
    GET_TICKETS,
    TICKETS_ERROR,
    SELECT_PAGE,
    LOAD_TICKETS,
} from "../actions/types";
import { itemsPerPage } from "../settings";

const initialState = {
    allTickets: [],
    pageCount: 0,
    itemOffset: 0,
    ticket: null,
    loading: true,
    error: {},
};


//Tickets reducer which modifies state for all tickets, number of pages, item offset to determine current page, current ticket, loading status, and any errors
export default function ticketsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_TICKETS:
            return {
                ...state,
                loading: true,
            };
        case GET_TICKETS:
            return {
                ...state,
                allTickets: payload,
                pageCount: Math.ceil(payload.length / itemsPerPage),
                itemOffset: 0,
                loading: false,
            };
        case GET_TICKET:
            return {
                ...state,
                ticket: payload,
                loading: false,
            };
        case TICKETS_ERROR:
            return {
                ...state,
                error: payload,
                ticket: null,
                allTickets: [],
                itemOffset: 0,
                pageCount: 0,
                loading: false,
            };
        case SELECT_PAGE:
            return {
                ...state,
                itemOffset: payload,
            };
        default:
            return state;
    }
}
