const express = require("express");
const router = express.Router();
const config = require("config");
const axios = require("axios");
const axiosConfig = {
    headers: {
        Authorization: `${config.get(`zendeskSecret`)}`,
    },
};

// @route GET api/tickets
// @desc  Get all tickets from zendesk
router.get("/", async (req, res) => {
    pages = [];

    url =
        "https://zccmadhu.zendesk.com/api/v2/tickets.json?page[size]=25&sort=updated_at";
    try {
        while (url) {
            const body = await axios.get(url, axiosConfig);
            if (body.data.tickets && body.data.tickets.length > 0) {
                pages.push(body.data.tickets);
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
    res.json(pages);
});

router.get("/:id", async (req, res) => {
    url =
    `https://zccmadhu.zendesk.com/api/v2/tickets/${req.params.id}`;
    try {
        const body = await axios.get(url, axiosConfig)
        res.json(body.data.ticket)
    } catch (err) {
        console.log(err.message);
        if (err.response && err.response.status) {
            return res.status(err.response.status).send(err.message)
        } else {
            return res.status(500).send("Server error")
        }
    }
});

module.exports = router;
