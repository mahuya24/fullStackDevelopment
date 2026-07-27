//Check Armstrong Number

let n: number = 153;
let temp: number = n;
let sum: number = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + (digit * digit * digit);
    temp = Math.floor(temp / 10);
}

if (sum == n) {
    console.log(n + " is an Armstrong Number");
} else {
    console.log(n + " is Not an Armstrong Number");
}