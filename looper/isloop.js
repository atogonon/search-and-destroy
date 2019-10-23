'use strict';

//Complete this algo
//will determine if a list contains a loop. It should return true if a loop exists
const isLoop = linkedlist => {
  console.log(linkedlist.getNthNode(1));
  currentValue = [];
  currentValue.push(linkedlist.head.value);
  console.log(currentValue);

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
