import { testStore } from "./utils";
import { setAlert } from "../actions/alert";

describe("setAlert action", () => {
    test("alert state is updated correctly", () => {
        const expectedState = {
            msg: "alert",
            alertType: "danger",
        };
        const store = testStore();
        store.dispatch(setAlert("alert", "danger"));
        const newState = store.getState();
        expect(newState.alert).toStrictEqual(expectedState);
    });
});
