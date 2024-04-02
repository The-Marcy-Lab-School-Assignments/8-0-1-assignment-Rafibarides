const express = require("express");
const path = require("path");

const app = express();

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);

app.use(express.static(path.join(__dirname, '../app/dist')));

app.get("/api/hello", (req, res) => {
  const name = req.query.name || "stranger";
  res.send(`Hello, ${name}!`);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
