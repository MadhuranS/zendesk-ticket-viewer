import axios from "axios";
import { setAlert } from "./alert";
import { GET_TICKETS, SELECT_PAGE, TICKETS_ERROR } from "./types";

//Get all tickets
export const getTickets = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/tickets");
        dispatch({
            type: GET_TICKETS,
            payload: res.data,
        });
        dispatch(setAlert("Tickets found!", "success"));
    } catch (err) {
        dispatch({
            type: TICKETS_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

export const selectPage = (pageNumber) => async (dispatch) => {
    dispatch({
        type: SELECT_PAGE,
        payload: pageNumber,
    });
};
