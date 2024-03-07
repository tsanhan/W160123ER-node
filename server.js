const express = require('express');
const router = require('./cards/routes/cardsRestController');
const app = express();


app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});