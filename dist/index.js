"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev", {
  skip: function skip() {
    return app.get("env") === "test";
  }
}));
var PORT = process.env.PORT || 5000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/api/v1", _routes["default"]);
app.get("/", function (req, res) {
  res.json({
    message: "Invalid Route",
    redirect: "/api/v1"
  });
});
app.listen(PORT, function () {
  return console.log("Qr8tors Server listening on port ".concat(PORT, "!"));
});