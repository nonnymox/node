// Steps to create an Express Server
// Create dir and index.js
// Initialize NPM
// Install express package
// Write Server Application
// Start Server

import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World")
    console.log(req.rawHeaders)
});


app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
