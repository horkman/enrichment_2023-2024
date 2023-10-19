const express = require("express");

// Initialize our web server
const app = express();
app.use(express.static("public"));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// Always run this code last!
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web Server listening on port ${port}`);
});
