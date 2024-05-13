"use strict";

var reduce = function reduce(array) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var reducer = arguments.length > 2 ? arguments[2] : undefined;
  var accumulator = initialValue;
  for (var index = 0; index < array.length; index++) {
    accumulator = reducer(accumulator, array[index]);
  }
  return accumulator;
};
var array = [1, 2, 3, 4, 5];
var outputValue = reduce(array, 0, function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(outputValue);