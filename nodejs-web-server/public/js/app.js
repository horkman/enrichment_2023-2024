/**
 * Random Answer App
 */

function resetForm() {
  $("#question").val("");
  $(".answer").text("");
  $(".answer").hide();
}

function getRandomAnswer(question) {
  return fetch("/randomize", {
    method: "POST", // Options are GET, POST, PUT, DELETE, PATCH
    body: { question }, // A "body" can only be sent in POST, PUT, PATCH
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));
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

  if (question === "") {
    $(".answer").show();
    $(".answer").text("You didn't type anything in!!!!");
    return;
  }

  // Now, we need to pass the question to our
  // processing function so we can generate an answer.
  //
  // getRandomAnswer is now a "Promise" frunction so we
  // need to wait for the answer with a "then" function
  getRandomAnswer(question).then(({ answer }) => {
    // Finally, we need to display the answer
    displayAnswer(answer);
  });
});

$(".answer").hide();

$("#resetButton").click(function () {
  resetForm();
});
