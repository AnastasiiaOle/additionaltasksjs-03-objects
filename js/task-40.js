// Задача. Обновляем зелье
// Задание
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// После первого вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
// После второго вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Невидимка'].

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     updatePotionName(oldName, newName) {
//       // Пиши код ниже этой строки
   
//       // Пиши код выше этой строки
//     },
//   };


const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    updatePotionName(oldName, newName) {
      // Пиши код ниже этой строки
    const potionIndex = this.potions.indexOf(oldName);
      if (potionIndex === -1) {
        return `Зелья ${oldName} нет в инвентаре!`;
      }
      this.potions.splice(potionIndex, 1, newName);
      // Пиши код выше этой строки
    },
  };
  