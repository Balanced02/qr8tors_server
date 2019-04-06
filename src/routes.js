import express, { Router } from "express";
import { connectDb } from "./models";
import bodyParser from "body-parser";
import { check } from "express-validator/check";
import { createUser } from "./controllers/v1/users";

require("dotenv").config();

const api = Router();

connectDb(process.env.DATABASE_URL).then(() => {
  console.log("database successfully connected");
});

api.use(bodyParser.json());

api.use(
  bodyParser.urlencoded({
    extended: false
  })
);

api.post(
  "/users/create",
  [
    check("email").isEmail(),
    check("phoneNumber").isLength({ min: 11 }),
    check("fullName").isLength({ min: 1 })
  ],
  createUser
);

api.get("/", (req, res) => {
  res.json({
    message: "Welcome to Qr8tors API v1 with 🔥",
  });
});

export default api;
