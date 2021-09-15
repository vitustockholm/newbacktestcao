// /api/jokes/

// /api/jokes/:amount

// /api/jokes/:category

// /api/jokes/:category/:amount

let jokes = [];

let amountJokes = 0;

module.exports = {
  jokeliai: (req, res) => {
    res.status(200).send(joke);
  },

  amoutjokes: (req, res) => {
    const { jokes } = req.body;
    amountJokes++;
    jokes.push({ joke: value, id: amountJokes });
    res.status(200).json(jokes);
  },

  category: (req, res) => {
    const { joke, id } = req.body;
    for (i = 0; i < jokes.length; i++) {
      if (i + 1 === Number(id)) {
        jokes[i].joke = joke;
      }
    }
    res.status(200).json(jokes);
  },

  catAmount: (req, res) => {
    for (i = 0; i < jokes.length; i++) {
      if (i + 1 === Number(req.query.id)) {
        jokes.splice(i, 1);
      }
    }
    res.status(200).json(jokes);
  },
};
