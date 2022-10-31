// Task1
// const a = +prompt("Enter your number");
// if (!isNaN(a)) {
//   getNumbers(a);
// } else {
//   console.log("You have to write only number");
// }
// function getNumbers(a) {
//   for (let i = 1; i <= 1000; i++) {
//     if (i % a == 0) {
//       console.log(i);
//     }
//   }
// }

// Task2
// const a = +prompt("Enter your number");
// let count = 0;
// if (!isNaN(a)) {
//   getSquareOfNumber(a, count);
// } else {
//   console.log("You have to write only number");
// }
// function getSquareOfNumber(a, count) {
//   for (let i = 1; i < a; i++) {
//     if (i * i < a) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// Task3
// const a = +prompt("Enter your number");
// if (!isNaN(a)) {
//   largestDivisor(a);
// } else {
//   console.log("You have to write only number");
// }
// function largestDivisor(a) {
//   for (let i = a - 1; i < a; i--) {
//     if (a % i == 0) {
//       let largestDivisor = i;
//       console.log(largestDivisor);
//       break;
//     }
//   }
// }

// Task4
// const a = +prompt("Enter your number A");
// const b = +prompt("Enter your number B");
// let sum = 0;
// if (!isNaN(a) && !isNaN(b) && b > a) {
//   console.log(getNumbersByDividedSeven(sum));
// } else {
//   console.log("You have to write only number and b cant be less than a");
// }
// function getNumbersByDividedSeven(sum) {
//   for (let i = a; i <= b; i++) {
//     if (i % 7 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// Task5
// const num = +prompt("Enter the number: ");
// let n1 = 0;
// let n2 = 1;
// let z;

// if (!isNaN(num) && num >= 0) {
//   if (num === 0) {
//     console.log(n1);
//   } else if (num === 0) {
//     console.log(n2);
//   } else {
//     console.log(sumOperation(num, n1, n2, z));
//   }
// }

// function sumOperation(num, n1, n2, z) {
//   for (let i = 1; i <= num; i++) {
//     z = n1 + n2;
//     n1 = n2;
//     n2 = z;
//   }
//   return n1;
// }

// Task6
// const num1 = +prompt("Enter the number 1: ");
// const num2 = +prompt("Enter the number 2: ");
// var z;
// if (!isNaN(num1) && !isNaN(num2)) {
//   console.log(
//     `Greatest common divisor of ${num1} and ${num2} is ${getGreatestCommonDivisor(
//       z
//     )}.`
//   );
// }

// function getGreatestCommonDivisor(z) {
//   for (let i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       z = i;
//     }
//   }
//   return z;
// }

//Task7
// let a = +prompt("Enter The number");

// if (!isNaN(a)) {
//   console.log(getReverseOfNumber(a));
// }
// function getReverseOfNumber(a) {
//   let b = 0;
//   let sum = 0;
//   while (a > 0) {
//     b = a % 10;
//     sum = sum * 10 + b;
//     a = parseInt(a / 10);
//   }
//   return sum;
// }

//Task8
// let num1 = +prompt("Enter The number 1:");
// let num2 = +prompt("Enter The number 2:");
// let count = 0;
// if (!isNaN(num1) && !isNaN(num2)) {
//   getSameDigitNumber(num1, num2, count);
//   if (count > 0) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }
// function getSameDigitNumber(num1, num2, count) {
//   let x = 0;
//   let y = 0;
//   let z = num2;
//   for (let i = 0; 0 < num1; i++) {
//     x = num1 % 10;
//     num1 = parseInt(num1 / 10);
//     num2 = z;
//     for (let j = 0; 0 < num2; j++) {
//       y = num2 % 10;
//       num2 = parseInt(num2 / 10);
//       if (x === y) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
