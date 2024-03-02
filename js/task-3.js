
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [ 4, 5 ]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [ 5 ]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [ 41, 76 ]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [ 24, 41, 76 ]



function changeEven(numbers, value) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    } else {
      newArray.push(numbers[i]);
    }
  }
   return newArray;
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]