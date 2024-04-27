const map = function(keyArray,valueFunction){
    
    var valueArray =[];
    
    for(let index=0;index<keyArray.length;index++){

        let value = valueFunction(keyArray[index]);
        
        valueArray.push(value);
    }
    
    return valueArray;
}

var array = [1,2,3,4];

var mappedValue = map(array, num => num*3);

console.log(mappedValue);

var usingMap = array.map(num=> num*3 );

console.log(usingMap);