import React from "react";
import { shallow } from "enzyme";
import { Pagination } from "../components/tickets/Pagination";
import { findByTestAtrr, checkProps } from "./utils";

const setUp = (props = {}) => {
    const component = shallow(<Pagination {...props} />);
    return component;
};

describe("Pagination component", () => {
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                selectPage: () => {},
                tickets: {},
            };
            const propsError = checkProps(Pagination, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe("Renders", () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                tickets: { pageCount: 2, itemOffset: 1 },
                selectPage: mockFunc,
            };
            component = setUp(props);
        });

        it("Should render a pagination component", () => {
            const pagination = findByTestAtrr(component, "Pagination");
            expect(pagination.length).toBe(1);
        });
    });
});
