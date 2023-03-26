// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
let printForecast = (arr) => {
  let str = "";
  let i = 0;
  arr.forEach((element) => {
    str += element + "*C" + "in" + (i + 1) + "days...";
    i++;
  });
  console.log("..." + str);
};
printForecast(data1);
