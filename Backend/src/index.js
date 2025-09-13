const express = require("express");
const cors = require("cors");
require("dotenv").config();

////Initilize app
const PORT = 8000;
const app = express();

////Middlewares
app.use(cors());
app.use(express.json());

////routes
app.get("/health", (req, res) => {
  res.json("Server is running!!");
});

app.listen(PORT, () => {
  console.log("Listening at port ", PORT);
});
