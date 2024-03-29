const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8080, () => {
  console.log("8080 서버 연결");
});
