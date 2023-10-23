function displaySeriesAndSum(num) {
  let series = '';
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    series += i + ' ';
    sum += i;
  }

  console.log(`Series: ${series.trim()}`);
  console.log(`Sum = ${sum}`);
}

module.exports = displaySeriesAndSum;