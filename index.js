/* eslint-disable */

// Унарный плюс приводит операнд к числу
console.log('+17:', +17); //17
console.log("+'77':", +'77'); //77

// Бинарный плюс складывает строки или прибавляет числа
console.log("10 + '5':", 10 + '5'); //105
console.log("'some' + 'text':", 'some' + 'text'); //sonetext

// Математические операции с undefined возвращают NaN
console.log('undefined + 1:', undefined + 1); //NaN
console.log('null + 8:', null + 8); //8
console.log("undefined + '5':", undefined + '5'); //undefined5
console.log('7 - null:', 7 - null); //7
console.log('5 - undefined:', 5 - undefined); //NaN
console.log("'text' + null:", 'text' + null); //textnull

// Постфиксная и префиксная форма записи
let num = 17;
console.log('let num = 17:', num); //17
console.log('++num:', ++num); //18
console.log('num++:', num++); //18

// математические операторы приводят операнды к числам
const a = 17;
console.log('const a = 17:', a); //17
const b = -a;
console.log('const b = -a:', b); //-17
console.log("'24' / 4:", '24' / 4); // 6
console.log("18 * '3':", 18 * '3'); //54
console.log("'9' - '3':", '9' - '3'); //6
console.log("'seventeen' / 3:", 'seventeen' / 3); //NaN
console.log("4 * 'four':", 4 * 'four'); //NaN
console.log('17 / 0:', 17 / 0); //Infinity

console.log("10 + 'seven':", 10 + 'seven'); //10seven
console.log('undefined + 1:', undefined + 1); //NaN
console.log('null + 8:', null + 8); //8
console.log("undefined + '5':", undefined + '5'); //undefined5
console.log("'text' + null:", 'text' + null); //textnull
