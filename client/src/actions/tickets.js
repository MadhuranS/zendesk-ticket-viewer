import axios from "axios";
import { setAlert } from "./alert";
import { GET_TICKET, GET_TICKETS, SELECT_PAGE, TICKETS_ERROR } from "./types";

//Get all tickets
export const getTickets = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/tickets");
        dispatch({
            type: GET_TICKETS,
            payload: res.data,
        });
        if (res.data.length === 0) {
            dispatch(setAlert("No tickets currently exist", "info"));
        } else {
            dispatch(setAlert("Tickets found!", "success"));
        }

    } catch (err) {
        dispatch({
            type: TICKETS_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
        dispatch(setAlert(`Something went wrong :(, error text: ${err.response.statusText}, error code: ${err.response.status}`, "danger"))
    }
};

export const selectPage = (pageNumber) => async (dispatch) => {
    dispatch({
        type: SELECT_PAGE,
        payload: pageNumber,
    });
};

export const getTicket = (ticket) => async (dispatch) => {
    dispatch({
        type: GET_TICKET,
        payload:ticket
    })
}