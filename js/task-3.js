function filterArray(numbers, value) {
    const array = [];
    for (args of numbers){
        if (args > value) array.push(args);
    }
    return array;
}

console.log("------------- TASK 3 ------------");
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(" ");