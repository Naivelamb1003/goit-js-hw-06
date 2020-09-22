// map
// Получи массив имен всех пользователей(свойство name) используя деструктурирующее присваивание для параметра функции({ name }) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.
// Write code under this line
const getUserNames = function (users) {
  return users.map(({ name }) => name);
};

// console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
