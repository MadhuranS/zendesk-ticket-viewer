import React from "react";
import { shallow } from "enzyme";
import Tickets from "../components/tickets/Tickets";
import { findByTestAtrr } from "./utils";

const setUp = (props = {}) => {
    const component = shallow(<Tickets {...props} />);
    return component;
};

describe("Tickets Component", () => {
    describe("With tickets state", () => {
        let component;
        beforeEach(() => {
            const props = {
                tickets: [{id: 1}, {id: 2}],
            };
            component = setUp(props);
        });
        it("Should render 2 Ticket components without errors", () => {
            const wrapper = findByTestAtrr(component, "Ticket");
            expect(wrapper.length).toBe(2);
        });
        it("Should render 2 Ticket headers without errors", () => {
            const wrapper = findByTestAtrr(component, "Ticket-Header");
            expect(wrapper.length).toBe(2);
        });
        it("Should render 2 Ticket bodys without errors", () => {
            const wrapper = findByTestAtrr(component, "Ticket-Body");
            expect(wrapper.length).toBe(2);
        });
        it("Should render 2 Ticket links without errors", () => {
            const wrapper = findByTestAtrr(component, "Ticket-Link");
            expect(wrapper.length).toBe(2);
        });
        it("Should render 2 Ticket footers without errors", () => {
            const wrapper = findByTestAtrr(component, "Ticket-Footer");
            expect(wrapper.length).toBe(2);
        });
    });
    describe("With empty tickets state", () => {
        let component;
        beforeEach(() => {
            const props = {
                tickets: null,
            };
            component = setUp(props);
        });
        it("Should not render", () => {
            const wrapper = findByTestAtrr(component, "Ticket");
            expect(wrapper.length).toBe(0);
        });
    });
});
