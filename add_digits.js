/**
 * @param {number} num
 * @return {number}
 */
const addDigits = num => num === 0 ? 0 : (num % 9 === 0 ? 9 : num % 9);

console.log(addDigits(38)); // 2
console.log(addDigits(243)); // 9
console.log(addDigits(7592)); // 5
