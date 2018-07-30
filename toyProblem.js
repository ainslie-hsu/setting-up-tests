/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


const largestProductOfThree = function largestProductOfThree(array) {
  // Sort largest to smallest
  const sorted = array.sort((num1, num2) => (
    // Sort largest to smallest
    num1 < num2
  ));

  // Get top three numbers
  const topThree = sorted.slice(0, 3);

  return topThree.reduce((product, number) => product * number);
};

module.exports = {
  largestProductOfThree,
};
