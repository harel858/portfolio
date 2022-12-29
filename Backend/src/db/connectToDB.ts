import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
console.log(process.env.MONGOURI);

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then((x) => console.log(`connect to DB`))
  .catch((e) => console.log(e));
