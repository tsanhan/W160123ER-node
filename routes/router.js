const express = require("express");
const router = express.Router();
const cardRouter = require("../cards/routes/cardsRestController");
const handleError = require("../utils/handleErros");

router.use('/cards', cardRouter);

// localhost:8181/apps 404
router.use((req, res) => handleError(res, 404, "Not Found"));

module.exports = router; 
