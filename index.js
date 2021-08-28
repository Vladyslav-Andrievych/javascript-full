/* eslint-disable */

/* оператор || (OR) */
console.log('false || true:', false || true); //true
console.log('false || true || false:', false || true || false); //true
console.log('false || false || false:', false || false || false); //false

/* оператор && (AND) */
console.log('false && true:', false && true); // false
console.log('false && true && false:', false && true && false); //false
console.log('true && true && true:', true && true && true); //true

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
console.log("'text' || false:", 'text' || false); //text
console.log("true || 'text':", true || 'text'); // true
console.log(
  "undefined || null || 0 || '' || null:",
  undefined || null || 0 || '' || null
); //null

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);
console.log('amount:', amount); // 17
/* && находит первое ложное значение */
console.log("'text' && false:", 'text' && false); // false
console.log("true && 'text':", true && 'text'); // text
console.log(
  "undefined && null && 0 && '' && null:",
  undefined && null && 0 && '' && null
); //undefined

/* оператор отрицания (OR) */
console.log('!true:', !true); //false
console.log('!false:', !false); //true
console.log("!'text':", !'text'); //false
console.log("!!'text':", !!'text'); //true
