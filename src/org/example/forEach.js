const forEach = function(array, forEachFunction){

    for(let index = 0 ; index < array.length ; index++){

        forEachFunction(array[index]);

    }

}

let array = [1,2,3,4,5];

forEach(array , (currentValue) => console.log(currentValue));