"use strict";

//creating a map function
var map = function map(keyArray, valueFunction) {
  //initilaizing an empty array to store values
  var valueArray = [];
  //running a for loop to obtain values for each element
  for (var i = 0; i < keyArray.length; i++) {
    var value = valueFunction(keyArray[i]);
    //adding elements to valueArray
    valueArray.push(value);
  }
  //returning the final valueArray
  return valueArray;
};

//function to obtain values
var valueFunction = function valueFunction(keyArrayValue) {
  return keyArrayValue * 3;
};
var array = [1, 2, 3, 4];

//obtaining values from map function
var mappedValue = map(array, valueFunction);
console.log(mappedValue);

//obtaining values from builtin function
var usingMap = array.map(function (num) {
  return num * 3;
});
console.log(usingMap);