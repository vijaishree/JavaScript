"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var server = _http["default"].createServer(function (req, res) {
  res.end('Hello from the server');
}).listen(4001);
console.log('Server is up and running');
var _default = exports["default"] = server;