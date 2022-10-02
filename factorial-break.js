let factorial = 1;
let i = 10;
while (true) {
    factorial = factorial * i;
    if (i === 1) {
        break;
    } else {
        i--;
    }
}

console.log(factorial);