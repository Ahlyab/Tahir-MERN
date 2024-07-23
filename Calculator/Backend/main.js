import express from "express";
import calculationRouter from "./Routes/Calculation.js";

const app = express();
const port = 5555;

app.use(express.json());
app.use("/", calculationRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
