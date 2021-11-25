import { combineReducers } from "redux";
import alert from "./alert";
import tickets from "./tickets"

export default combineReducers({
    alert,
    tickets,
});
