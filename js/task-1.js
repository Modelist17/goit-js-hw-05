
// task 4.1:
function isEnoughCapacity(products, containerSize) {
  // Отримуємо масив ключів об'єкта products
  const productNames = Object.keys(products);

  // Отримуємо загальну кількість товарів у контейнері за допомогою reduce
  const totalProducts = productNames.reduce((acc, productName) => {
    // Отримуємо кількість товару за ключем productName
    const quantity = products[productName];
    // Додаємо кількість товару до акумулятора
    return acc + quantity;
  }, 0);

  // Перевіряємо, чи загальна кількість товарів не перевищує розмір контейнера
  return totalProducts <= containerSize;
}

// Перевірка коректності роботи функції
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));  // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));   // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14));   // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
