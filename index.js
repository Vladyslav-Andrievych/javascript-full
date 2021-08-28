/* eslint-disable */

/* Результатом сравнения является булевое значение */

/* Сравнение чисел */
const a = 17;
const b = 5;
console.log('a > b:', a > b); // true
console.log('a <= b:', a <= b); //false
console.log('a == b:', a == b); //false
console.log('a != b:', a != b); //true

/* Сравнение строк */
console.log("'a' < 'b':", 'a' < 'b'); //true
console.log("'ab' > 'a':", 'ab' > 'a'); //true

/* При сравнении переменных разных типов они преобразуются в числа */
console.log("'17' > 1:", '17' > 1); //true

/* Строгое сравнение */
console.log('17 === 1:', 17 === 1); //false
console.log('17 === 17:', 17 === 17); //true
console.log("17 === '17':", 17 === '17'); //false
console.log('17 === true:', 17 === true); //false
console.log("'0' === '':", '0' === ''); //false
console.log('true === false:', true === false); //false
console.log('true === true:', true === true); //true
console.log('null === undefined:', null === undefined); //false
console.log('false === 0:', false === 0); //false

/* Нестрогое сравнение */
console.log("17 == '17':", 17 == '17'); //true
console.log("'0' == '':", '0' == ''); //false
console.log("0 == '':", 0 == ''); //true
console.log('null == undefined:', null == undefined); //true
console.log('false == 0:', false == 0); //true

/* Осторожно c null и undefined */
console.log('undefined == null:', undefined == null); //true
console.log('undefined == 0:', undefined == 0); //false
console.log('null == 0:', null == 0); //false
console.log('undefined < 0:', undefined < 0); // false
console.log('undefined > 0:', undefined > 0); // false
