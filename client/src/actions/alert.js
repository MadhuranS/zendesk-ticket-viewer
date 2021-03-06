import { SET_ALERT} from "./types";

//set a new alert
export const setAlert =
    (msg, alertType) =>
    (dispatch) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType},
        });
    };
