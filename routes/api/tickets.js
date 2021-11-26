const express = require("express");
const router = express.Router();
const config = require("config");
const axios = require("axios");

// @route GET api/tickets
// @desc  Get all tickets from zendesk
router.get("/", async (req, res) => {
    const axiosConfig = {
        headers: {
            Authorization: `${config.get(`zendeskSecret`)}`,
        },
    };

    pages = [];

    url = "https://zccmadhu.zendesk.com/api/v2/tickets.json?page[size]=25";
    try {
        while (url) {
            const body = await axios.get(url, axiosConfig);

            pages.push(body.data.tickets);
            if (body.data["meta"]["has_more"]) {
                url = body.data["links"]["next"];
            } else {
                url = null;
            }
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
        return;
    }
    res.json(pages);
});

module.exports = router;
