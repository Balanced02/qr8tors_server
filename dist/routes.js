"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _models = require("./models");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _check = require("express-validator/check");

var _users = require("./controllers/v1/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

require("dotenv").config();

var api = (0, _express.Router)();
(0, _models.connectDb)(process.env.DATABASE_URL).then(function () {
  console.log("database successfully connected");
});
api.use(_bodyParser["default"].json());
api.use(_bodyParser["default"].urlencoded({
  extended: false
}));
api.post("/users/create", [(0, _check.check)("email").isEmail(), (0, _check.check)("phoneNumber").isLength({
  min: 11
}), (0, _check.check)("fullName").isLength({
  min: 1
})], _users.createUser);
api.get("/", function (req, res) {
  res.json({
    message: "Welcome to Qr8tors API v1 with 🔥",
    process: process.env
  });
});
var _default = api;
exports["default"] = _default;