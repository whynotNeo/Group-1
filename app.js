const readline = require('readline');
const displaySeriesAndSum = require('./seriesModule');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input a number: ', (num) => {
  displaySeriesAndSum(Number(num));
  rl.close();
});