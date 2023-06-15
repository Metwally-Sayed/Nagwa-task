import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { config } from "dotenv";
import quizRouter from "./routes/Quiz";
import rankRouter from "./routes/Rank";

const app = express();
config();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/rank", rankRouter);
app.use("/quiz", quizRouter);

app.get("*", (req, res) => {
  res.status(404).json({
    msg: "Erorr 404",
  });
});

app.listen(process.env.PORT, async () => {
  console.log(`listing on ${process.env.PORT} port`);

  try {
    console.log(`server listening on ${process.env.PORT}`);
  } catch (error) {
    console.log("conection Not Valid");
    console.log(error);
  }
});
