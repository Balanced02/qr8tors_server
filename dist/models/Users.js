"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('express-validator/check'),
    body = _require.body;

var userSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  }
});

var Users = _mongoose["default"].model('Users', userSchema);

Users.syncIndexes();
var _default = Users;
exports["default"] = _default;