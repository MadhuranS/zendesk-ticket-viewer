import {
    GET_TICKET,
    GET_TICKETS,
    TICKETS_ERROR,
    SELECT_PAGE,
    LOAD_TICKETS,
} from "../actions/types";
import ticketsReducer from "../reducers/tickets";

const testState = {
    allTickets: [{ id: 1 }],
    pageCount: 1,
    itemOffset: 0,
    ticket: { id: 1 },
    loading: false,
    error: {},
};

describe("Ticket Reducer", () => {
    it("Test for LOAD_TICKETS action", () => {
        const newState = ticketsReducer(testState, {
            type: LOAD_TICKETS,
        });
        expect(newState).toEqual({
            allTickets: [{ id: 1 }],
            itemOffset: 0,
            pageCount: 1,
            ticket: { id: 1 },
            loading: true,
            error: {},
        });
    });
    it("Test for SELECT_PAGE action", () => {
        const newState = ticketsReducer(testState, {
            type: SELECT_PAGE,
            payload: 1,
        });
        expect(newState).toEqual({
            allTickets: [{ id: 1 }],
            itemOffset: 1,
            pageCount: 1,
            ticket: { id: 1 },
            loading: false,
            error: {},
        });
    });
    it("Test for TICKETS_ERROR action", () => {
        const newState = ticketsReducer(testState, {
            type: TICKETS_ERROR,
            payload: { errortext: "auth error" },
        });
        expect(newState).toEqual({
            allTickets: [],
            itemOffset: 0,
            pageCount: 0,
            ticket: null,
            loading: false,
            error: { errortext: "auth error" },
        });
    });
    it("Test for GET_TICKETS action", () => {
        const tickets = [1, 2, 3, 4, 5, 6, 7, 8,9,10, 11, 12,13, 14, 15,16,17,18,19,20,21,22,23,24,25,26];
        const newState = ticketsReducer(undefined, {
            type: GET_TICKETS,
            payload: tickets,
        });
        expect(newState).toEqual({
            allTickets: [1, 2, 3, 4, 5, 6, 7, 8,9,10, 11, 12,13, 14, 15,16,17,18,19,20,21,22,23,24,25,26],
            itemOffset: 0,
            pageCount: 2,
            ticket: null,
            loading: false,
            error: {},
        });
    });
    it("Test for GET_TICKET action", () => {
        const ticket = { id: 2 };
        const newState = ticketsReducer(testState, {
            type: GET_TICKET,
            payload: ticket,
        });
        expect(newState).toEqual({
            allTickets: [{ id: 1 }],
            itemOffset: 0,
            pageCount: 1,
            ticket: { id: 2 },
            loading: false,
            error: {},
        });
    });
});
