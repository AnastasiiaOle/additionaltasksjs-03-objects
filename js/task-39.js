// Задача. Удаляем зелье
// Задание
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.removePotion это метод объекта.
// После первого вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
// После вотрого вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив ['Каменная кожа'].

// const atTheOldToad = {
//     potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//     removePotion(potionName) {
//       // Пиши код ниже этой строки
      
//       // Пиши код выше этой строки
//     },
//   };
const atTheOldToad = {
    potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
    removePotion(potionName) {
      // Пиши код ниже этой строки
       const potionIndex = this.potions.indexOf(potionName);
      if (potionIndex === -1) {
        return `Зелья ${potionName} нет в инвентаре!`;
      }
      this.potions.splice(potionIndex, 1);
      // Пиши код выше этой строки
    },
  };
  