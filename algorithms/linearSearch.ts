/**
 * Linear Search
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(list: number[], target: number): number | null {
  /**
   * Returns the index position of the target if found, else returns Null
   */
  let result = null;
  list.forEach((value, index) => {
    if (value === target) {
      return (result = index);
    }
  });
  return result;
}

function verify(list: number[], index: number | null, target: number) {
  if (!index) {
    return console.log(`Target not found in list`);
  }
  if (list[index] === target) {
    return console.log(`Target found at index: ${index}, target: ${target}`);
  }
  return console.log(
    `Target value is not correct. expected:${target}, actual:${list[index]}`
  );
}

verify(numbers, linearSearch(numbers, 12), 12);
verify(numbers, linearSearch(numbers, 6), 6);
