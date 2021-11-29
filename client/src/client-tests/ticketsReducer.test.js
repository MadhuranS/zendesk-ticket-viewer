import {
    GET_TICKET,
    GET_TICKETS,
    TICKETS_ERROR,
    SELECT_PAGE,
    LOAD_TICKETS,
} from "../actions/types";
import ticketsReducer from "../reducers/tickets";

const testState = {
    pages: [[{ id: 1 }]],
    page: 1,
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
            pages: [[{ id: 1 }]],
            page: 1,
            ticket: { id: 1 },
            loading: true,
            error: {},
        });
    });
    it("Test for SELECT_PAGE action", () => {
        const newState = ticketsReducer(testState, {
            type: SELECT_PAGE,
            payload: 2,
        });
        expect(newState).toEqual({
            pages: [[{ id: 1 }]],
            page: 2,
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
            pages: [],
            page: 0,
            ticket: null,
            loading: false,
            error: { errortext: "auth error" },
        });
    });
    it("Test for GET_TICKETS action", () => {
        const tickets = [[{ id: 1 }, { id: 2 }]];
        const newState = ticketsReducer(undefined, {
            type: GET_TICKETS,
            payload: tickets,
        });
        expect(newState).toEqual({
            pages: [[{ id: 1 }, { id: 2 }]],
            page: 0,
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
            pages: [[{ id: 1 }]],
            page: 1,
            ticket: { id: 2 },
            loading: false,
            error: {},
        });
    });
});
