/**
 * Let's learn NodeJS!
 */

// Pull in a library that gives us the ability
// to do HTTP stuff
const http = require("http");

// Determine the HTTP port we will run on
const PORT = process.env.PORT || 3000;

// Create the web server and define functionality
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/hi") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
});

// Start the server
server.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
