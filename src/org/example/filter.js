
const filter = function(array,filterFunction){
    
    var filteredArray = [];

    for(let index=0;index<array.length;index++){

        var booleanValue = filterFunction(array[index]);

        if(booleanValue) filteredArray.push(array[index]);
    }

    return filteredArray;
}

var array = [1,2,3,4,5,6];

var output = filter(array,num => num % 2 === 0);

console.log(output);