// write a function to find the smallest of three values

/* function minNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const smallestValue = minNumber(150, 120, 20);
console.log('The smallest value is', smallestValue); */

//Find Maximum of three values using math.max()

const smallest = Math.min(100, 90, 200);
console.log('The smallest value is', smallest);