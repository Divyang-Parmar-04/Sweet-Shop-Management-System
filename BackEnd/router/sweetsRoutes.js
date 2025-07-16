const express = require('express');
const {
  listSweets,
  addNewSweet,
  deleteExistingSweet,
  purchaseSweet,
  restockSweet,
  searchSweetByName,
  sortSweets
} = require('../controller/sweetsController.js');

const router = express.Router();

router.get('/', listSweets);
router.post('/', addNewSweet);
router.delete('/:id', deleteExistingSweet);
router.post('/purchase/:id', purchaseSweet);
router.post('/restock/:id', restockSweet);
router.get('/search/:name', searchSweetByName);
router.get('/sort/:sortBy/:value', sortSweets);

module.exports = router;
