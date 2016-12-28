/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    let str = '';
    str += i % 3 ? '' : 'Fizz';
    str += i % 5 ? '' : 'Buzz';
    str += i % 3 && i % 5 ? i.toString() : '';
    array.push(str);
  }
  return array;
};

console.log(fizzBuzz(15));
