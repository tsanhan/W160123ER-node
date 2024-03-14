const express = require('express');
const router = require('./routes/router');
const app = express();
const cors = require('./cors/cors');


app.use(cors);
app.use(express.json());
app.use(express.text());
app.use(express.static('./public', {
    maxAge: 1000 * 60 * 60 * 24 * 7,
}));

app.use(router); // /cards/[what came from the cardRouter ("./cards/routes/cardsRestController")]


const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});