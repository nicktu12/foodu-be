const express = require("express");
const app = express();

app.get("/api/v1/test", (request, response) => {
  response.send("Foodu is the future");
});

app.listen(3001, () => {
  console.log("Express app running on localhost:3001");
});
