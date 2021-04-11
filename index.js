const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2);
}
const returnLastTwoDrivers = function(arr){
    return arr.slice(arr.length-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple){
    return function(x){
        return x*multiple;
    }
}

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(3));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(3));

function selectDifferentDrivers(arr, fun){
    return fun(arr);
}