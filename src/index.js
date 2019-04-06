import express from "express";
import logger from 'morgan'
import router from "./routes";

const app = express();

app.use(
  logger("dev", {
    skip: () => app.get("env") === "test"
  })
);

var PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1", router);

app.get("/", function (req, res) {
  res.json({
    message: "Invalid Route",
    redirect: "/api/v1"
  })
});

app.listen(PORT, () => console.log(`Qr8tors Server listening on port ${PORT}!`));