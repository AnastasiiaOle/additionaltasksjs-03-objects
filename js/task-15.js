// Метод Object.values()
// Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.

// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const values = Object.values(book);
// console.log(values); // ['Последнее королевство', 'Бернард Корнуэлл', 8.38]
// Массив значений свойств также можно перебрать циклом for...of, например для получения общей суммы числовых значений.

// Задание
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153].
// Для получения массива ключей объекта apartment используется Object.keys().
// Для получения массива значений объекта apartment используется Object.values().

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   // Пиши код ниже этой строки
//   const keys = apartment;
//   const values = apartment;
  
const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  // Пиши код ниже этой строки
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);