const express = require('express');
const router = express.Router();

const { getCards } = require("../models/cardsDataAccessService");
const handleError = require('../../utils/handleErros');

router.get("/", async (req, res) => {
    try {
        const cards = await getCards();
        return res.send(cards);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

module.exports = router;
