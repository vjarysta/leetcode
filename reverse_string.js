/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
  let str = '';
  for (var i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  return str;
};

console.log(reverseString('hello'));
