export {};
/**
 * Linear Search
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(list: number[], target: number): number {
  /**
   * Returns the index position of the target if found, else returns -1
   */
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return -1;
}

function verify(list: number[], index: number, target: number) {
  if (index === -1) {
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
