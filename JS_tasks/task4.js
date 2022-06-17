function numberOfPairs(target, array) {
    let amountOfPairs = 0;
    let length = array.length;
    for (let i = 0; i < length; i++) {
        amountOfPairs += array.filter(num => num + array[0] === target).length;
        if(array[0] * 2 === target) amountOfPairs -= 1;
        array.shift();
    }
    return amountOfPairs;
}

console.log(numberOfPairs(5, [1, 3, 6, 2, 2, 0, 4, 5]));
console.log(numberOfPairs(1, [1, 3, 6, 2, 2, 0, 4, 5]));
console.log(numberOfPairs(10, [10, 0, 5, 6, 4]));