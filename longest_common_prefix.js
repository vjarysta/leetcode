var findCommonPrefix = function(str1, str2) {
  var result = '';

  for (var i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] != str2[j]) {
      break ;
    }
    result += str1[i];
  }
  return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix = strs[0];

  for (var i = 1; i < strs.length; i++) {
    prefix = findCommonPrefix(prefix, strs[i]);
  }
  return prefix;
};

console.log(longestCommonPrefix(['abcde11111', 'abcd111', 'abcd11111', 'abcdefg11111']));
