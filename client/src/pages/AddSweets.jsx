import { useEffect, useState } from 'react';
import { getSweets,addSweet,deleteSweet,restockSweet } from '../service/api';

function AddSweets() {
  
  const [form, setForm] = useState({ id: '', name: '', category: '', price: '', stock: '' });

  const [restockInfo, setRestockInfo] = useState({ id: '', qty: '' });
  const [sweets, setSweets] = useState([]);
  

  // GET ALL SWEETS FROM DB 

  const fetchData = async () => {
    const { data } = await getSweets();
    setSweets(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
 

  // ADD NEW SWEETS

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addSweet({id: form.id,name: form.name, category: form.category, price: parseFloat(form.price), stock: parseInt(form.stock)});
      fetchData();
      setForm({ id: '', name: '', category: '', price: '', stock: '' });
    } catch (err) {
      alert(err.response?.data?.message || "Error adding sweet");
    }
  };
   
  //DELETE SWEETS

  const handleDelete = async (id) => {
    await deleteSweet(id);
    fetchData();
  };
  

  //RESTOCK SWEETS QUANTITY

  const handleRestock = async () => {
    if (!restockInfo.id || !restockInfo.qty) return;
    try {
      await restockSweet(restockInfo.id, parseInt(restockInfo.qty));
      fetchData();
      setRestockInfo({ id: '', qty: '' });
    } catch (err) {
      alert(err.response?.data?.message || "Error restocking");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">🍭 Manage Sweet Inventory</h1>

      {/* ➕ Add Sweet Form */}
      <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow mb-6 space-y-3">
        <h2 className="text-xl font-semibold mb-2">Add New Sweet</h2>
        <input type="text" placeholder="ID" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} className="w-full p-2 border rounded" required />
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-2 border rounded" required />
        <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full p-2 border rounded" required />
        <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="w-full p-2 border rounded" required />
        <input type="number" placeholder="Stock" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Sweet</button>
      </form>

      {/* 🔁 Restock Form */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Restock Existing Sweet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={restockInfo.id}
            onChange={e => setRestockInfo({ ...restockInfo, id: e.target.value })}
            className="p-2 border rounded"
          >
            <option value="">Select Sweet</option>
            {sweets.map(sweet => (
              <option key={sweet.id} value={sweet.id}>{sweet.name}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Quantity to Add"
            value={restockInfo.qty}
            onChange={e => setRestockInfo({ ...restockInfo, qty: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        <button onClick={handleRestock} className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Restock
        </button>
      </div>

      {/* 🧁 Sweet List (with Delete option) */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">All Sweets</h2>
        {sweets.length === 0 ? (
          <p>No sweets found.</p>
        ) : (
          <div className="space-y-2">
            {sweets.map(sweet => (
              <div key={sweet.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <p className="font-medium">{sweet.name} ({sweet.category})</p>
                  <p>Price: ₹{sweet.price} | Stock: {sweet.stock}</p>
                </div>
                <button onClick={() => handleDelete(sweet.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AddSweets;
