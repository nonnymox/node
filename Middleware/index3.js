import express from "express";

const app = express();
const port = 3000;
const logger = (res, req, next) => {
  console.log("Request Url: ", req.url);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
