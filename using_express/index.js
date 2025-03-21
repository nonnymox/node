// Steps to create an Express Server
// Create dir and index.js
// Initialize NPM
// Install express package
// Write Server Application
// Start Server

import express from "express";
const app = express();
const port = 3000;
// Using the Get Request
app.get("/", (req, resp) => {
  resp.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
