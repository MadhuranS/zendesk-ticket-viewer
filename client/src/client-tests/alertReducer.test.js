import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
import alertReducer from "../reducers/alert";

describe("Alert Reducer", () => {
    it("Should return default state", () => {
        const newState = alertReducer(undefined, {});
        expect(newState).toEqual(null);
    });
    it("Test for SET_ALERT action", () => {
        const alert = { msg: "Alert", alertType: "danger", id: 1 };
        const newState = alertReducer(undefined, {
            type: SET_ALERT,
            payload: alert,
        });
        expect(newState).toEqual(alert);
    });
    it("Test for REMOVE_ALERT action", () => {
        const newState = alertReducer({ msg: "Alert", alertType: "danger", id: 1 }, {
            type: REMOVE_ALERT
        })
        expect(newState).toEqual(null)
    })
});
