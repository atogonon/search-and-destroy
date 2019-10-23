'use strict';

//Complete this algo
//will determine if a list contains a loop. It should return true if a loop exists
const isLoop = (linkedlist, memo={}, index=1) => {
  let node = linkedlist.getNthNode(index)
  console.log(node.value)

  if (node.value in memo) {
    return true
  }
  else if (node.next === null) {
    return false
  }
  else if (!(node.value in memo)) {
    memo[node.value]=true
    return isLoop(linkedlist, memo, index+1)
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
