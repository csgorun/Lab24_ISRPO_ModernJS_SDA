// // console.log("\n=== Деструктизация массивов ===");
// // const colors = ["red", "green", "blue"];

// // const color1 = colors[0];
// // const color2 = colors[1];
// // console.log(color1, color2);

// // const [firstColor, secondColor, thirdColor] = colors;
// // console.log(firstColor, secondColor, thirdColor);

// // const [primary, , tertiary] = colors;
// // console.log(primary, tertiary);

// // const [c1, c2, c3, c4 = "yellow"] = colors;
// // console.log(c4);

// // console.log("Деструктуризация обьектов");
// // const user = {
// //     name: "Алиса",
// //     age: 25,
// //     city: "Москва",
// // };

// // const userName = user.name;
// // const userAge = user.age;
// // console.log(userName, userAge);

// // const { name, age, city } = user;
// // console.log(name, age, city);

// // const { name: fullName, age: years } = user;
// // console.log(fullName, years);

// // const { name: personName, country = "Россия" } = user;
// // console.log(personName, country);

// console.log("Деструктизация в параметрах");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// };

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город ${user.city}`);
// }

// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUserOld(user);

// console.log("Spread  для массивов");

//  const arr1 = [1, 2, 3];
//  const arr2 = [4, 5, 6];

//  const combined = [...arr1, ...arr2];
//  console.log("Обьединённый массив:", combined);

//  const copy = [...arr1];
//  console.log("Копия массива:", copy);

//  const extended = [0, ...arr1, 7, 8];
//  console.log("Расширенный массив:", extended);

//  console.log("Spread для обьектов");

// const person = {
//     name: "Иван",
//     age: 30,
// };

// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };

// const fullInfo = { ...person, ...address};
// console.log("полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия обьекта:", personCopy);

// const update = { ...person, age: 31, occupation: "Developer"};
// console.log("обновленный объект:", update);

// console.log("Rest оператор");

//  function sum (...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//  }

//  console.log("Сумма 1,2,3:", sum(1, 2, 3));
//  console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));


//  const numbers = [10, 20, 30, 40, 50];
//  const [first, second, ...rest] = numbers;
//  console.log("Первое число:", first);
//  console.log("Второе число", second);
//  console.log("Остальные числа:", rest);

// Практическое задание

// 1. Два массива чисел
const mas1 = [1, 2, 3, 4, 5, 6, 7];
const mas2 = [8, 9, 10, 11, 12, 13];

const combine = [...mas1, ...mas2];

// 3. Функция findMax с rest-параметрами
function findMax(...numbers) {
  if (numbers.length === 0) return undefined;
  return Math.max(...numbers);
}

console.log("Максимальное значение:", findMax(...combine)); 