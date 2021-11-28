import { SET_ALERT} from "./types";
import { v4 as uuid } from "uuid";

export const setAlert =
    (msg, alertType, timeout = 60000) =>
    (dispatch) => {
        const id = uuid();
        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType, id },
        });
    };
