function hasTargetSum(array, target) {
  // Write your algorithm here
  const numMap = {};

  for (let num of array) {
    const complement = target - num;

    if (numMap[complement]) {
      return true;
    }

    numMap[num] = true;
  }

  return false;
}

/*
  The time complexity of the function is O(n), where n is the length of the array. This is because we iterate through the array once and perform constant time operations (accessing and adding to the hash table) for each number.
*/

/* 
  Add your pseudocode here
  1. Create an empty hash table called numMap.
  2. Iterate through the array. For each number:
    a. Calculate its complement (target minus the number).
    b. Check if the complement is already in the hash table.
    c. If it is, return true.
    d. If it is not, add the number to the hash table.
  3. If we iterate through the entire array and never find a pair of numbers that add up to the target, return false.

*/

/*
  Add written explanation of your solution here
  We create an empty hash table to keep track of the numbers we have seen so far.
  We iterate through the array and for each number, we calculate its complement (target minus the number).
  If the complement is already in the hash table, we have found a pair of numbers that adds up to the target and we can return true.
  If the complement is not in the hash table, we add the number to the hash table.
  If we iterate through the entire array and never find a pair of numbers that add up to the target, we return false.

  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
