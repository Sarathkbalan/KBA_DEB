import express, { json } from "express";
import { mongoose } from "mongoose";
const app = express();
import cors from "cors";
import routes from "./routes/routes";

app.use(
  cors({ 
    origin: "http://localhost:3000",
  })
);

app.use(json());
app.use("/", routes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://mongodb:27017/Kba_courses");

const database = mongoose.connection

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
