let sweets = [
  { id: "301", name: "Choco Lava", category: "Chocolate", price: 55, stock: 12 },
  { id: "302", name: "Dark Bliss", category: "Chocolate", price: 60, stock: 8 },
  { id: "303", name: "Hazelnut Heaven", category: "Chocolate", price: 70, stock: 10 },
  { id: "304", name: "Bubble Pop", category: "Candy", price: 10, stock: 50 },
  { id: "305", name: "Mint Spark", category: "Candy", price: 12, stock: 40 },
  { id: "306", name: "Sour Blast", category: "Candy", price: 15, stock: 30 },
  { id: "307", name: "Vanilla Swirl", category: "Pastry", price: 35, stock: 20 },
  { id: "308", name: "Berry Danish", category: "Pastry", price: 38, stock: 16 },
  { id: "309", name: "Cream Puff", category: "Pastry", price: 42, stock: 12 },
];

function getSweets() {
  return sweets;
}

function addSweet(sweet) {
  sweets.push(sweet);
}

function findSweet(id) {
  return sweets.find(s => s.id === id);
}

function deleteSweet(id) {
  const index = sweets.findIndex(s => s.id === id);
  if (index !== -1) {
    sweets.splice(index, 1);
    return true;
  }
  return false;
}

function setSweets(newSweets) {
  sweets = newSweets;
}

module.exports = {
  getSweets,
  addSweet,
  findSweet,
  deleteSweet,
  setSweets,
};
