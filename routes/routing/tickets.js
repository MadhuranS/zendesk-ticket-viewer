const express = require("express");
const router = express.Router();
const getTickets = require("../api/getTickets");
const getTicket = require("../api/getTicket");

// @route GET api/tickets
// @desc  Get all tickets from zendesk
router.get("/", getTickets);

// @route GET api/ticket
// @desc  Get a ticket using ticket ID from zendesk
router.get("/:id", getTicket);

module.exports = router;
