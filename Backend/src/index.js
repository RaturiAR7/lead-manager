import leadRoutes from "./routes/leadRoute.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

////Initilize app
dotenv.config();
const PORT = 8000;
const app = express();

////Middlewares
app.use(cors());
app.use(express.json());

////routes
app.use("/api/leads", leadRoutes);

app.get("/health", (req, res) => {
  res.json("Server is running!!");
});

app.listen(PORT, () => {
  console.log("Listening at port ", PORT);
});
