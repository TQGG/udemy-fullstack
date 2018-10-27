const express = require("express"); // common js modules - not ES 2015 modules
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

// app has methods - get, post, put, delete, patch
const PORT = process.env.PORT || 5000;
app.listen(PORT);
