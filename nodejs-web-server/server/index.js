const express = require("express");
const bodyParser = require("body-parser");

// Initialize our web server
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

function getRandomAnswer(question) {
  // Our array/list of possible answers
  // Remember: Array indexes always start at zero!
  const possibleAnswers = [
    "Yes.",
    "No.",
    "Reply hazy, try again.",
    "Hmmm, maybe.",
  ];

  // First, let's get a random number between 0 and 1
  const randomNumber = Math.random();

  // Then, let's multiply the random number by the length of the answers array
  // and then round the number down to get our randomized index
  const randomIndex = Math.floor(randomNumber * possibleAnswers.length);

  // Now we use the random array index to pull the value out of the
  // array and return it
  return possibleAnswers[randomIndex];
}

app.post("/randomize", (req, res) => {
  const request = req.body; // This will look like { question }
  const question = request.question;
  const answer = getRandomAnswer(question);
  res.send({ answer });
});

// Always run this code last!
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web Server listening on port ${port}`);
});
