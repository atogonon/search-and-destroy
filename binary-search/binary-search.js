'use strict';

// Complete this algo
//return true if target is in a sorted array
//find target using binary search method
const binarySearch = (array, target) => {
  const midpoint = Math.ceil(array.length / 2);
  if (array.length === 1 && target === array[0]) {
    return true;
  } else if (target === array[midpoint]) {
    return true;
  } else if (array[midpoint] > target) {
    const firstHalf = array.slice(0, midpoint);
    return binarySearch(firstHalf, target);
  } else if (array[midpoint] < target) {
    const secondHalf = array.slice(midpoint);
    return binarySearch(secondHalf, target);
  }
  return false;
};
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
