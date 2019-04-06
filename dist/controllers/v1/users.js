"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = void 0;

var _index = require("../../models/index");

var _check = require("express-validator/check");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createUser = function createUser(req, res) {
  var errors = (0, _check.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }

  _index.Users.create(_objectSpread({}, req.body)).then(function (user) {
    return res.json({
      message: "Registration Successful",
      user: user
    });
  })["catch"](function (err) {
    return res.json({
      message: err.message
    });
  });
};

exports.createUser = createUser;