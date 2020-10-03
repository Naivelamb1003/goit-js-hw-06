// sort и map
// Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// Избегаем мутации исходного массива: т.к. метод sort изменяет (мутирует) исходный массив, то следует сделать копию массива и сортировать уже копию, а не исходный массив.
// Write code under this line
const getNamesSortedByFriendsCount = (array) =>
  [...array]
    .sort((user1, user2) => user1.friends.length - user2.friends.length)
    .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
