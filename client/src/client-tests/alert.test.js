import React from "react";
import { shallow } from "enzyme";
import { Alert } from "../components/layouts/Alert";
import { findByTestAtrr } from "./utils";

const setUp = (props = {}) => {
    const component = shallow(<Alert {...props} />);
    return component;
};

describe("Alert Component", () => {
    describe("With alert state", () => {
        let component;
        beforeEach(() => {
            const props = {
                alerts: {},
            };
            component = setUp(props);
        });
        it("Should render an alert component without errors", () => {
            const wrapper = findByTestAtrr(component, "Alert");
            expect(wrapper.length).toBe(1);
        });
    });
    describe("With empty alert state", () => {
        let component;
        beforeEach(() => {
            const props = {
              alerts: null
            }
            component = setUp(props);
        });
        it("Should not render", () => {
            const wrapper = findByTestAtrr(component, "Alert");
            expect(wrapper.length).toBe(0);
        });
    });
});
