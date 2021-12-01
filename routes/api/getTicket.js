const config = require("config");
const axios = require("axios");


async function getTicket(req, res) {
    const axiosConfig = {
        headers: {
            Authorization: `${config.get(`token`)}`,
        },
    };
    url = `https://${config.get(`subdomain`)}/api/v2/tickets/${req.params.id}`;
    try {
        const body = await axios.get(url, axiosConfig);
        res.json(body.data.ticket);
    } catch (err) {
        console.log(err.message);
        if (err.response && err.response.status) {
            return res.status(err.response.status).send(err.message);
        } else {
            return res.status(500).send("Server error");
        }
    }
}

module.exports = getTicket;
