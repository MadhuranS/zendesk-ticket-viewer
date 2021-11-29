import React from "react";
import { shallow } from "enzyme";
import { Ticket } from "../components/ticket/Ticket";
import { findByTestAtrr } from "./utils";
import { checkProps } from "./utils";

const setUp = (props = {}) => {
    const component = shallow(<Ticket {...props} />);
    return component;
};
describe("Tickets-View component", () => {
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                getTicket: () => {},
                tickets: {},
            };
            const propsError = checkProps(Ticket, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
    describe("Renders", () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                tickets: { ticket: { id: 1 }, loading: false },
                getTicket: mockFunc,
            };
            component = setUp(props);
        });

        it("Should render a Ticket component", () => {
            const tickets = findByTestAtrr(component, "Ticket");
            expect(tickets.length).toBe(1);
        });

        it("Should render a Ticket-Header", () => {
            const header = findByTestAtrr(component, "Ticket-Header");
            expect(header.length).toBe(1);
        });
        it("Should render a Ticket-Footer", () => {
            const footer = findByTestAtrr(component, "Ticket-Footer");
            expect(footer.length).toBe(1);
        });
        it("Should render a Ticket-Link", () => {
            const link = findByTestAtrr(component, "Ticket-Link");
            expect(link.length).toBe(1);
        });
        it("Should render a Ticket-Body", () => {
            const body = findByTestAtrr(component, "Ticket-Body");
            expect(body.length).toBe(1);
        });
    });
    describe("Stuck loading", () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                tickets: { ticket:null, loading: true },
                getTicket: mockFunc,
            };
            component = setUp(props);
        });
        it("Should render a Spinner component", () => {
            const spinner = findByTestAtrr(component, "Loading");
            expect(spinner.length).toBe(1);
        });
    });
    describe("No ticket", () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                tickets: { ticket: null, loading: false },
                getTicket: mockFunc,
            };
            component = setUp(props);
        });
        it("Should render no Tickets but with loading", () => {
            const header = findByTestAtrr(component, "Ticket-Header");
            const footer = findByTestAtrr(component, "Ticket-Footer");
            const spinner = findByTestAtrr(component, "Loading");
            const link = findByTestAtrr(component, "Ticket-Link")
            expect(header.length).toBe(0);
            expect(footer.length).toBe(0);
            expect(spinner.length).toBe(0);
            expect(link.length).toBe(1)
        });
    });
});
