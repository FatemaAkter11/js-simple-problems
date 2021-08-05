// Find the largest element of an array

function largestElement(numbers) {
    // let largest = 0;
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const largestAges = largestElement([35, 12, 65, 90, 4, 19]);
//const largestAges = largestElement([-35, -2, -13, -10, -4, -19]);
console.log('The Oldest Man', largestAges);