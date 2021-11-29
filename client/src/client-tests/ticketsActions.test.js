import moxios from "moxios";
import { testStore } from "./utils";
import { getTickets, selectPage, getTicket } from "../actions/tickets";

describe("fetchPosts action", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });
    test("tickets state is updated correctly", () => {
        const expectedState = [[{ id: 1 }, { id: 2 }]];
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            });
        });
        return store.dispatch(getTickets()).then(() => {
            const newState = store.getState();
            expect(newState.tickets.pages).toBe(expectedState);
        });
    });
    test("tickets page state is updated correctly", () => {
        const expectedState = 1;
        const store = testStore();
        store.dispatch(selectPage(1));
        const newState = store.getState();
        expect(newState.tickets.page).toStrictEqual(expectedState);
    });
    test("tickets ticket state is updated correctly", () => {
        const expectedState = { id: 2 };
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            });
        });
        return store.dispatch(getTicket(expectedState.id)).then(() => {
            const newState = store.getState();
            expect(newState.tickets.ticket).toBe(expectedState);
        });
    });
    test("tickets error state is updated correctly", () => {
        const expectedState = { msg: undefined, status: 401 };
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response: expectedState,
            });
        });
        return store.dispatch(getTickets()).then(() => {
            const newState = store.getState();
            expect(newState.tickets.error).toStrictEqual(expectedState);
        });
    });
});
