"use strict";

var filter = function filter(array, filterFunction) {
  var filteredArray = [];
  for (var index = 0; index < array.length; index++) {
    var booleanValue = filterFunction(array[index]);
    if (booleanValue) filteredArray.push(array[index]);
  }
};
var array = [1, 2, 3, 4, 5, 6];
var output = filter(array, function (num) {
  return num % 2 === 0;
});
console.log(output);