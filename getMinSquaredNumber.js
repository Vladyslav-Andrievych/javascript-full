export default (numbers) =>
  Array.isArray(numbers) && numbers.length > 0
    ? Math.min(...numbers.map((num) => Math.abs(num))) ** 2
    : null;
