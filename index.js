const cleanTransactionsList = (transactions) =>
  transactions
    .filter((elem) => !isNaN(elem))
    .map((elem) => '$' + parseFloat(elem).toFixed(2));

console.log(
  cleanTransactionsList(['   1.9 ', '16.4', '17 ', 17, ' 1 dollar '])
);
