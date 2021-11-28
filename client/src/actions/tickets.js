import axios from "axios";
import { setAlert } from "./alert";
import {LOAD_TICKETS, GET_TICKET, GET_TICKETS, SELECT_PAGE, TICKETS_ERROR, REMOVE_ALERT } from "./types";

//Get all tickets
export const getTickets = () => async (dispatch) => {
    try {
        dispatch({
            type: REMOVE_ALERT
        })
        dispatch({
            type: LOAD_TICKETS
        })
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
        dispatch(
            setAlert(
                `Something went wrong :(, error text: ${err.response.statusText}, error code: ${err.response.status}`,
                "danger"
            )
        );
    }
};

export const selectPage = (pageNumber) => async (dispatch) => {
    dispatch({
        type: SELECT_PAGE,
        payload: pageNumber,
    });
};

export const getTicket = (id) => async (dispatch) => {
    dispatch({
        type: REMOVE_ALERT
    })
    dispatch({
        type: LOAD_TICKETS
    })
    try {
        const res = await axios.get(`/api/tickets/${id}`);
        dispatch({
            type: GET_TICKET,
            payload: res.data,
        });
        dispatch(setAlert("Ticket found!", "success"));
    } catch (err) {
        dispatch({
            type: TICKETS_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
        dispatch(
            setAlert(
                `Something went wrong :(, error text: ${err.response.statusText}, error code: ${err.response.status}`,
                "danger"
            )
        );
    }
};
