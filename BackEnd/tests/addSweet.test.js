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
  // ADD SWEET TEST

  test('Add a new sweet', async () => {
    const sweet = {
      id: '3',
      name: 'Berry Pie',
      category: 'Pastry',
      price: 30,
      stock: 15
    };
    const res = await request(app).post('/api/sweets').send(sweet);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Sweet added successfully');
  });
})