/**
 * Random Answer App
 *
 * TODO: how should we handle an empty question?
 * TODO: how would we add an extra answer?
 * TODO: how would we add a reset or clear button?
 */

function getRandomAnswer(question) {
  // Our array/list of possible answers
  const possibleAnswers = ["Yes.", "No.", "Reply hazy, try again."];

  // First, let's get a random number between 0 and 1
  const randomNumber = Math.random();

  // Then, let's multiply the random number by the length of the answers array
  // and then round the number down to get our randomized index
  const randomIndex = Math.floor(randomNumber * possibleAnswers.length);

  // Now we use the random array index to pull the value out of the
  // array and return it
  return possibleAnswers[randomIndex];
}

function displayAnswer(answer) {
  // Make sure the HTML element is shown and not hidden
  $(".answer").show();

  // Display the answer by adding it to the correct HTML element
  $(".answer").text(answer);
}

$("#answerButton").click(function () {
  // First, we need to get the question that was
  // typed into the input box
  const question = $("#question").val();

  // Now, we need to pass the question to our
  // processing function so we can generate an answer
  const answer = getRandomAnswer(question);

  // Finally, we need to display the answer
  displayAnswer(answer);
});
