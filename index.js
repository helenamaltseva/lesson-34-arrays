const shoppingList = [
  { name: "М'ясо", quantity: 1, bought: false, price: 100, total: 100 },
  { name: "Молоко", quantity: 3, bought: true, price: 30, total: 90 },
  { name: "Хліб", quantity: 2, bought: false, price: 20, total: 40 },
  { name: "Масло", quantity: 1, bought: true, price: 50, total: 50 },
  { name: "Помідори", quantity: 2, bought: false, price: 70, total: 140 },
];

function displayShoppingList() {
  console.log("Список покупок:");

  // Виведення непридбаних продуктів
  shoppingList
    .filter(item => !item.bought)
    .forEach(item => {
      console.log(`${item.name} - Кількість: ${item.quantity}, Ціна: ${item.price}, Сума: ${item.total}`);
    });

  // Виведення придбаних продуктів
  shoppingList
    .filter(item => item.bought)
    .forEach(item => {
      console.log(`${item.name} - Кількість: ${item.quantity}, Ціна: ${item.price}, Сума: ${item.total}`);
    });
}

function purchaseProduct(productName) {
  const product = shoppingList.find(item => item.name === productName);

  if (product) {
    if (!product.bought) {
      product.bought = true;
      console.log(`Продукт "${productName}" відзначено як придбаний.`);
    } else {
      console.log(`Продукт "${productName}" вже придбаний.`);
    }
  } else {
    console.log(`Продукт "${productName}" не знайдено.`);
  }
}

// Виклики функцій
displayShoppingList();
purchaseProduct("Молоко");
purchaseProduct("Масло");
displayShoppingList();
