import express from "express";
import calculationRouter from "./Routes/Calculation.js";
import cors from "cors";
const app = express();
const port = 5555;

app.use(express.json());
app.use(cors());
app.use("/", calculationRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
