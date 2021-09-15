const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const got = require('./controllers');

// const app = express();
app.use(express.json());

const PORT = 4000;

app.get('/', function (req, res) {
  res.send(
    'Hello dom vel visiskai ne nuo to galo pradejau..... Man jau sprogsta galva... '
  );
});

app.listen(PORT || 4000, () => console.log(`Server listening on port ${PORT}`));

//controllers

app.get('/api/jokes', got.jokeliai);

app.get('/api/jokes/:amount', got.amoutjokes);

app.get('/api/jokes/:category', got.category);

app.get('/api/jokes/:category/:amount', got.catAmount);
