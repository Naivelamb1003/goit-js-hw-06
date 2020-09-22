// Получи массив имен пользователей(значение свойства name) по полу(значение свойства gender).

// Write code under this line
const getUsersWithGender = function (array, genders) {
  return array
    .filter(({ gender }) => genders === gender)
    .map(({ name }) => name);
};

//console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
