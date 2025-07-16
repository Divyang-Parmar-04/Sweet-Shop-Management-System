const {
  getSweets,
  addSweet,
  findSweet,
  deleteSweet,
} = require('../model/sweetsModel.js');

// getAllSweets
const listSweets = (req, res) => {
  const results = getSweets();
  res.json(results);
};

// Add sweet
const addNewSweet = (req, res) => {
  const { id, name, category, price, stock } = req.body;

  if (!id || !name || !category || !price || stock == null) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const exists = findSweet(id);
  if (exists) return res.status(409).json({ message: "Sweet ID already exists" });

  addSweet({ id, name, category, price, stock });
  res.status(201).json({ message: "Sweet added successfully" });
};

// Delete sweet
const deleteExistingSweet = (req, res) => {
  const { id } = req.params;
  const success = deleteSweet(id);

  if (success) res.json({ message: "Sweet deleted" });
  else res.status(404).json({ message: "Sweet not found" });
};

// Purchase sweet (reduce stock)
const purchaseSweet = (req, res) => {
  const { id } = req.params;
  const { qty } = req.body;

  const sweet = findSweet(id);
  if (!sweet) return res.status(404).json({ message: "Sweet not found" });

  if (sweet.stock < qty) {
    return res.status(400).json({ message: "Not enough stock" });
  }

  sweet.stock -= qty;
  res.json({ message: "Purchase successful", sweet });
};

// Restock sweet (increase stock)
const restockSweet = (req, res) => {
  const { id } = req.params;
  const { qty } = req.body;

  const sweet = findSweet(id);
  if (!sweet) return res.status(404).json({ message: "Sweet not found" });

  sweet.stock += qty;
  res.json({ message: "Restock successful", sweet });
};

// search sweets by name only
const searchSweetByName = (req, res) => {
  const name = req.params.name || '';
  const sweets = getSweets();

  if (!name) {
    return res.status(200).json(sweets);
  }
  const results = sweets.filter(sweet =>
    sweet.name.toLowerCase().includes(name.toLowerCase())
  );

  return res.status(200).json(results);
};


// Sort sweets by category or price
const sortSweets = (req, res) => {
  const { sortBy, value } = req.params;
  const sweets = getSweets();

  if (sortBy === 'price' && value) {
    const filtered = sweets.filter(sweet => sweet.price <= Number(value));
    return res.status(200).json(filtered);
  } else if (sortBy === 'category' && value) {
    const filtered = sweets.filter(
      sweet => sweet.category.toLowerCase() === value.toLowerCase()
    );
    return res.status(200).json(filtered);
  }

  return res.status(200).json(sweets);
};


module.exports = {
  listSweets,
  addNewSweet,
  deleteExistingSweet,
  purchaseSweet,
  restockSweet,
  searchSweetByName,
  sortSweets
};
