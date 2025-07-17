# 🍫 Sweet Shop Management System

A full-stack web application for managing sweets in a shop — including features like purchasing, restocking , buy, add new Sweets, Delete Sweets and sort by name and Category.

---

## 🚀 Features

✅ Add New Sweets  
✅ View All Sweets in Inventory  
✅ Delete Sweets from Stock  
✅ Purchase Sweets (Reduce Stock)  
✅ Restock Sweets (Increase Stock)  
✅ Search by Sweet Name  
✅ Sort Sweets by price and category   
✅ Basic UI built with Tailwind CSS and React

---
## UI Image
<img width="1888" height="907" alt="{52F814E2-1D79-4750-B440-398A32FA1822}" src="https://github.com/user-attachments/assets/73a022f6-a9a9-43fb-8e71-a90200f497fa" />
---
<img width="1839" height="965" alt="{59FF17CC-D90B-45C6-8B35-2DF3F2AF0E4E}" src="https://github.com/user-attachments/assets/6f5c688b-a393-4b84-ae0f-71cf5d5b5ef5" />
---

## 🧱 Tech Stack

| Frontend     | Backend           | Tools & Styling |
| ------------ | ----------------- | --------------- |
| React + Vite | Node.js + Express | Tailwind CSS    |
| Axios        | Jest (unit tests) | React Hooks     |

---

## 📁 Project Structure

```
BackEnd/
  ├── controller/
  ├── model/
  ├── router/
  ├── tests/
  ├── index.js
  └── .env

client/
  ├── public/
  ├── src/
      ├── components/
      ├── pages/
      ├── service/
      ├── App.jsx
      └── main.jsx
  ├── index.html
  ├── vite.config.js
  └── .env
```

---

## 🛠️ Installation

### 🔧 Backend Setup

```bash
cd BackEnd
npm install
node index.js
```

Runs backend on:  
📍 `http://localhost:3000`

### 🌐 Frontend Setup

```bash
cd client
npm install
npm run dev
```

Opens frontend at:  
📍 `http://localhost:5173`

---

## 📦 API Endpoints

| Method | Endpoint                   | Description          |
|--------|----------------------------|----------------------|
| GET    | `/`                        | List all sweets      |
| POST   | `/`                        | Add a new sweet      |
| DELETE | `/:id`                     | Delete a sweet       |
| POST   | `/purchase/:id`            | Purchase a sweet     |
| POST   | `/restock/:id`             | Restock a sweet      |
| GET    | `/search/:name`            | Search sweet by name |
| GET    | `/sort/:sortBy/:value`     | Sort sweets          |

---

## 📊 Sample Sweet Data

```json
{
  "id": "301",
  "name": "Choco Lava",
  "category": "Chocolate",
  "price": 55,
  "stock": 12
}
```

---

## 🔍 Search & Sort Details

### Search by Name
```
GET /search/Barfi
```

### Sort Sweets
```
GET /sort/price/10      // Sort by price
GET /sort/category/candy     // Sort by category 
```

---

## 🧪 Testing (Backend)

```bash
npm test
```

Includes tests for:
- Adding a sweet
- Deleting a sweet
- Purchasing a Sweet
- restocking a Sweet
- Searching
- sorting sweets
- get Sweets

---

