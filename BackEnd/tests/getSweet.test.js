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
  // GET SWEET TEST
  test('Get all sweets', async () => {
    const res = await request(app).get('/api/sweets');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });
})