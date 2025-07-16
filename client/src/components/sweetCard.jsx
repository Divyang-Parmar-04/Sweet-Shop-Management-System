
function SweetCard({ sweet, onBuy }) {
    
    return (
        <div className="p-4 bg-white rounded shadow-md flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold">{sweet.name}</h2>
                <p className="text-sm text-gray-600">Category: {sweet.category}</p>
                <p>Price: ₹{sweet.price}</p>
                <p>In stock: {sweet.stock}</p>
            </div>
            <div className="mt-4 flex gap-2">
                <button
                    onClick={() => onBuy(sweet.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                    Buy
                </button>
              
            </div>
        </div>
    );
}

export default SweetCard;
