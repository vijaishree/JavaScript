//creating a map function
const map = function(keyArray,valueFunction){
    //initilaizing an empty array to store values
    var valueArray =[];
    //running a for loop to obtain values for each element
    for(let i=0;i<keyArray.length;i++){
        let value = valueFunction(keyArray[i]);
        //adding elements to valueArray
        valueArray.push(value);
    }
    //returning the final valueArray
    return valueArray;
}

//function to obtain values
const valueFunction = function(keyArrayValue){
    return keyArrayValue*3;
}

var array = [1,2,3,4];

//obtaining values from map function
var mappedValue = map(array,valueFunction);
console.log(mappedValue);

//obtaining values from builtin function
var usingMap = array.map(function(num){
    return num*3;}
)
console.log(usingMap);