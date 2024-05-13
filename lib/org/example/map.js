"use strict";

var _demo = _interopRequireDefault(require("./demo.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var map = function map(keyArray, valueFunction) {
  var valueArray = [];
  for (var index = 0; index < keyArray.length; index++) {
    var value = valueFunction(keyArray[index]);
    valueArray.push(value);
  }
  return valueArray;
};
(0, _demo["default"])();
var array = [1, 2, 3, 4];
var mappedValue = map(array, function (num) {
  return num * 3;
});
console.log(mappedValue);
var usingMap = array.map(function (num) {
  return num * 3;
});
console.log(usingMap);