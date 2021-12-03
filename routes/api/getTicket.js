const config = require("config");
const axios = require("axios");

//Requests data for a specific ticket
async function getTicket(req, res) {

    try {
        const axiosConfig = {
            headers: {
                Authorization: `${config.get(`token`)}`,
            },
        };
        url = `https://${config.get(`subdomain`)}/api/v2/tickets/${req.params.id}`;
        const body = await axios.get(url, axiosConfig);
        res.json(body.data.ticket);
    } catch (err) {
        console.log(err.message);
        if (err.response && err.response.status) {
            return res.status(err.response.status).send(err.message); //If external error with api request, forward external api error
        } else {
            return res.status(500).send("Server error"); //If internal error, send 500 code
        }
    }
}

module.exports = getTicket;
