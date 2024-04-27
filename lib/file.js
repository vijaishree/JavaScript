"use strict";

var map = function map(keyArray, valueFunction) {
  var valueArray = [];
  for (var i = 0; i < keyArray.size(); i++) {
    var value = valueFunction(keyArray[i], i);
    valueArray.push(value);
  }
  return valueArray;
};
var valueFunction = function valueFunction(keyArrayValue, i, keyArray) {
  return keyArrayValue * 3;
};
var array = [1, 2, 3, 4];
map(array, valueFunction);