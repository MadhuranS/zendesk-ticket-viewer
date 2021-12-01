import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = null;

//Alert reducer which modifies the current alert object state
export default function alertReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return payload
        case REMOVE_ALERT:
            return null;
        default:
            return state;
    }
}
