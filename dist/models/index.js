"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Users", {
  enumerable: true,
  get: function get() {
    return _Users["default"];
  }
});
exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Users = _interopRequireDefault(require("./Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectDb = function connectDb(dbURL) {
  return _mongoose["default"].connect(dbURL);
};

exports.connectDb = connectDb;