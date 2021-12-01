import { combineReducers } from "redux";
import alert from "./alert";
import tickets from "./tickets";

//Combine all reducers into
export default combineReducers({
    alert,
    tickets,
});
