// reduce
// Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

// Используй деструктурирующее присваивание для параметра функции {balance} без пробелов и переносов на новую строку
// Write code under this line
const calculateTotalBalance = (array) =>
  array.reduce((totalBalance, { balance }) => totalBalance + balance, 0);

// console.log(calculateTotalBalance(users));
// 20916
