const items = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Tomato", category: "Vegetable" },
];

const filterItems = items.filter(({ name }) => name === "Tomato");
console.log(filterItems);
