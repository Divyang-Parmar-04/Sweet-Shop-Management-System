import { useEffect, useState } from 'react';
import SweetCard from '../components/sweetCard';
import {
  getSweets,
  purchaseSweet,
  searchSweetsByName,
  sortSweetsBy
} from '../service/api';

function Home() {
  const [sweets, setSweets] = useState([]);
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  const fetchData = async () => {
    try {
      const { data } = await getSweets();
      setSweets(data);
    } catch (err) {
      console.error('Error fetching all sweets:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBuy = async (id) => {
    const qty = prompt("Enter quantity to buy:");
    if (!qty || isNaN(qty)) return alert("Invalid quantity");

    try {
      await purchaseSweet(id, parseInt(qty));
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || "Error purchasing");
    }
  };

  // Search by name
  const handleSearchByName = async () => {
    if (!name.trim()) {
      fetchData();
      return;
    }
    try {
      const { data } = await searchSweetsByName(name);
      setSweets(data);
    } catch (err) {
      alert('Error searching by name');
      setSweets([]);
    }
  };

  // Filter by price (max price)
  const handleFilterByPrice = async () => {
    if (!price) {
      fetchData();
      return;
    }
    try {
      const { data } = await sortSweetsBy('price', price);
      setSweets(data);
    } catch (err) {
      alert('Error filtering by price');
      setSweets([]);
    }
  };

  // Filter by category
  const handleFilterByCategory = async () => {
    if (!category.trim()) {
      fetchData();
      return;
    }
    try {
      const { data } = await sortSweetsBy('category', category);
      setSweets(data);
    } catch (err) {
      alert('Error filtering by category');
      setSweets([]);
    }
  };


  return (
    <div className="px-4 max-w-6xl mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">SWEET SHOP</h1>

      {/* Search by Name */}
      <div className="mb-4 flex gap-2 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleSearchByName}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Search Name
        </button>
      </div>

      {/* Filter by Price */}
      <div className="mb-4 flex gap-2 max-w-md mx-auto">
        <select
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="flex-grow p-2 border rounded"
        >
          <option value="">Select max price</option>
          <option value="10">Under 10</option>
          <option value="20">Under 20</option>
          <option value="50">Under 50</option>
          <option value="100">Under 100</option>
        </select>
        <button
          onClick={handleFilterByPrice}
          className="bg-green-600 text-white px-4 rounded"
        >
          Filter Price
        </button>
      </div>

      {/* Filter by Category */}
      <div className="mb-6 flex gap-2 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Filter by category (e.g. chocolate)"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleFilterByCategory}
          className="bg-purple-600 text-white px-4 rounded"
        >
          Filter Category
        </button>
      </div>

      {/* 🧁 Sweet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sweets.length === 0 ? (
          <p className="col-span-full text-center">No sweets found</p>
        ) : (
          sweets.map(sweet => (
            <SweetCard
              key={sweet.id}
              sweet={sweet}
              onBuy={handleBuy}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
