// Find the smallest element of an array

function smallestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

//const smallestAges = smallestElement([35, 12, 65, 90, 4, 19]);
const smallestAges = smallestElement([-35, -2, -13, -10, -4, -199]);
console.log('The child Boy', smallestAges);