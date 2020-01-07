"use strict"

let listOfNums = [];
let element = 0;

function askInputs() {

    do { 
    element = prompt('Please, enter a numbers.',);

    if (element == null) {
      confirm('Are you sure want to exit?') ? null : askInputs();
    } else if (+element !== +element) {
      alert('Sorry, but I don`t understand the letters!');
      let que = confirm('Want to continue?');
        if (!que == !1) {
          askInputs();
          break;
        } else {
          return null;
        }
    } else if (element == +element) {
      listOfNums.push(+element);
      }

    } while(element !== null);

};

function sumInputs(arr) {
  let sum = 0;
  for(let num of listOfNums) {
  sum += num;
  }
  return sum;
};
