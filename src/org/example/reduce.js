const reduce = function(array,initialValue = 0,reducer){

    var accumulator = initialValue ; 

    for(let index = 0 ;index < array.length ; index++){

        accumulator = reducer(accumulator , array[index]);

    }
    
    return accumulator
}

let array = [1,2,3,4,5]

var outputValue = reduce(array,0,(accumulator,currentValue)=> accumulator+currentValue);

console.log(outputValue);
