import React from "react";
import { shallow } from "enzyme";
import { TicketsView } from "../components/tickets/TicketsView";
import { findByTestAtrr } from "./utils";
import { checkProps } from "./utils";

const setUp = (props = {}) => {
    const component = shallow(<TicketsView {...props} />);
    return component;
};

describe("Tickets-View component", () => {
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                getTickets: () => {},
                tickets: {},
            };
            const propsError = checkProps(TicketsView, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
    describe("Renders", () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                tickets: { itemOffset: 0, allTickets: [1, 2], pageCount: 1, loading: false },
                getTickets: mockFunc,
            };
            component = setUp(props);
        });

        it("Should render a Tickets component", () => {
            const tickets = findByTestAtrr(component, "Tickets");
            expect(tickets.length).toBe(1);
        });

        it("Should render two pagination components", () => {
            const pagination = findByTestAtrr(component, "Pagination");
            expect(pagination.length).toBe(2);
        });
    });
    describe("Stuck loading", () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                tickets: { itemOffset: 0, allTickets: [1, 2], pageCount: 1, loading: true },
                getTickets: mockFunc,
            };
            component = setUp(props);
        });
        it("Should render a Spinner component", () => {
            const spinner = findByTestAtrr(component, "Loading");
            expect(spinner.length).toBe(1);
        });
    });
    describe("No pages", () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                tickets: { itemOffset: 0, allTickets: [], pageCount: 0, loading: false },
                getTickets: mockFunc,
            };
            component = setUp(props);
        });
        it("Should render no Tickets or pagination", () => {
            const pagination = findByTestAtrr(component, "Pagination");
            const tickets = findByTestAtrr(component, "Tickets");
            const spinner = findByTestAtrr(component, "Loading");
            expect(tickets.length).toBe(0);
            expect(pagination.length).toBe(0);
            expect(spinner.length).toBe(0);
        });
    });
});
