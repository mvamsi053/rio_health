const data = require("./data-store");
const http = require("http");
const express = require("express");
const app = express();

app.get("/projects/:id", function (req, res) {
  const id = req.params.id;
  const project = JSON.stringify(data.data[id - 1]);
  if (project) {
    res.write("200");
    res.write(project);
    res.send();
  } else {
    res.send("404");
  }
});
app.get("/projects", function (req, res) {
  res.write("400");
  res.write(JSON.stringify({ message: "BAD REQUEST" }));
  res.send();
});

app.listen(8000, function () {
  console.log("Server running on 8000");
});
