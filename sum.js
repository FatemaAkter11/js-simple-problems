// Sum of all numbers in an array

/* const arrayNumbers = [2, 5, 3, 7, 3];
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    const element = arrayNumbers[i];
    sum = sum + element;
}
console.log(sum); */

// Sum of all numbers in an array using function

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const arrayNumbers = arrayTotal([7, 7, 7]);
console.log(arrayNumbers);