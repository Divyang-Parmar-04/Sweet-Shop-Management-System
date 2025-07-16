const request = require('supertest');
const express = require('express');
const sweetRoutes = require('../router/sweetsRoutes.js');
const { setSweets } = require('../model/sweetsModel.js');

const app = express();
app.use(express.json());
app.use('/api/sweets', sweetRoutes);

describe('Sweet API Tests', () => {

  // SET DUMMY TEST DATA 

  beforeEach(() => {
    setSweets([
      { id: '1', name: 'Choco Lava', category: 'Chocolate', price: 55, stock: 10 },
      { id: '2', name: 'Candy Pop', category: 'Candy', price: 10, stock: 20 }
    ]);
  });
  // SORT SWEETS BASED ON PRICE

  test('Sort sweets by price', async () => {
    const res = await request(app).get('/api/sweets/sort/price/10');
    expect(res.statusCode).toBe(200);
    expect(res.body.every(s => s.price <= 10)).toBe(true);
  });

  // SORT SWEETS BASED ON CATEGORY

  test('Sort sweets by category', async () => {
    const res = await request(app).get('/api/sweets/sort/category/chocolate');
    expect(res.statusCode).toBe(200);
    expect(res.body.every(s => s.category.toLowerCase() === 'chocolate')).toBe(true);
  });

})