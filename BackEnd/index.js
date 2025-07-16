const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sweetRoutes = require('./router/sweetsRoutes.js');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/sweets', sweetRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
