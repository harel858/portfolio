import dotenv from "dotenv";
dotenv.config();
import "./db/connectToDB";
import express from "express";
import router from "./routes/customers";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: `${process.env.CLIENT}`,
  })
);
app.use("/", router);

app.listen(process.env.PORT, () =>
  console.log(`app is listening on port ${process.env.PORT}`)
);
