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
    try {
        const body = await axios.get(
            "https://zccmadhu.zendesk.com/api/v2/tickets.json",
            axiosConfig
        );

        res.json(body.data);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
