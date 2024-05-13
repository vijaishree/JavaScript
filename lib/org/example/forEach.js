"use strict";

var forEach = function forEach(array, forEachFunction) {
  for (var index = 0; index < array.length; index++) {
    forEachFunction(array[index]);
  }
};
var array = [1, 2, 3, 4, 5];
forEach(array, function (currentValue) {
  return console.log(currentValue);
});