import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Server running");
});

app.listen(3333, () =>
  console.log("Server is running at http://localhost:3333")
);
