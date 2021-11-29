import checkPropTypes from "check-prop-types";
/* eslint-disable react/prop-types */
export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(
        // eslint-disable-next-line react/forbid-foreign-prop-types
        component.propTypes,
        expectedProps,
        "props",
        component.name
    );
    return propsErr;
};
