const express = require("express");
const bodyParser = require("body-parser");

// Initialize our web server
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

// Always run this code last!
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web Server listening on port ${port}`);
});
