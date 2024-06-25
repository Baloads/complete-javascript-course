// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let forecast = '...';

  arr.forEach(element => {
    forecast += ` ${element} °C in ${arr.indexOf(element) + 1} days ...`;
  });

  console.log(forecast);
};

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

printForecast(testData1);
printForecast(testData2);
