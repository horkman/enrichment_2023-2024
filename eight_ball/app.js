// Initialize our "app" as an empty object so we can add things to it
const app = {};

// Make our app globally accessible by adding it to the "window" object
// Every browser has a "window" object
window.app = app;

app.initialize = function () {
  // const element = document.getElementById("currentTime");
  // element.innerHTML = app.getCurrentDateTime();

  console.log("Our app is initialized!");
};

/**
 * Returns the current date and time as a string
 */
app.getCurrentDateTime = function getCurrentDateTime() {
  return new Date().toLocaleString();
};

app.showName = function showName() {
  const firstNameElement = document.getElementById("firstName");
  const lastNameElement = document.getElementById("lastName");

  const firstName = firstNameElement.value;
  const lastName = lastNameElement.value;

  if (!firstName || !lastName) {
    alert("you forgot to type something!");
  }

  alert("Hello, " + firstName + " " + lastName + "!");
};
