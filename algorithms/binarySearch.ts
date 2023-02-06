export {};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(list: number[], target: number): number {
  let first = 0;
  let last = list.length - 1;
  let result = 0;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (list[mid] === target) {
      result = mid;
      break;
    }
    if (list[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return result;
}
