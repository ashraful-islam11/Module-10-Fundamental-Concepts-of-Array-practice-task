// todo:   task-4       topic: Check two variables (one array, one not) and log whether each is an array.

const numbers = [12, 34, 56,77,65];
const number = 20;

const thisIsArray = Array.isArray(numbers);

const checkVariable = Array.isArray(number);

console.log('numbers isArray ',thisIsArray);
console.log('number is Array ',checkVariable);