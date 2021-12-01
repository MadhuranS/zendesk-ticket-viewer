const config = require("config");
const axios = require("axios");

async function getTickets(req, res) {
    tickets = [];
    const axiosConfig = {
        headers: {
            Authorization: `${config.get(`token`)}`,
        },
    };
    url =
        `https://${config.get(`subdomain`)}/api/v2/tickets.json?page[size]=100&sort=id`;
    try {
        while (url) {
            const body = await axios.get(url, axiosConfig);
            if (body.data.tickets && body.data.tickets.length > 0) {
                tickets = tickets.concat(body.data.tickets);
            }
            if (body.data["meta"]["has_more"]) {
                url = body.data["links"]["next"];
            } else {
                url = null;
            }
        }
    } catch (err) {
        console.log(err.message);
        if (err.response && err.response.status) {
            return res.status(err.response.status).send(err.message);
        } else {
            return res.status(500).send("Server error");
        }
    }
    res.json(tickets);
}

module.exports = getTickets;
