import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
 const [error, setError] = useState("");
  const navigate = useNavigate();

 
  const fetchItems = async () => {
    try {
      const response = await fetch("/api/allitems"); 
      const data = await response.json();

      if (response.ok) {
        setItems(data);
        setError("");
      } else {
        setError("Failed to fetch items");
      }
    } catch (error) {
      setError("Error fetching items");
    }
  };

  return (
    <div className="mr-[300px] ml-[300px] mt-10  p-6 bg-green-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">All Items</h2>
      

      {error && <p className="text-red-500 text-center">{error}</p>}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 "
      >
        + Add Item
      </button>

      {items.length > 0 ? (
        <div className="grid grid-cols-2  gap-4">
          {items.map((item) => (
         <div key={item._id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">{item.itemName}</h3>
             <p className="text-gray-600">Category: {item.category}</p>
            <p className="text-gray-600">Quantity: {item.quantity}Kg</p>
              <p className="text-gray-600">Price: {item.price}Rs/kg</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No items available</p>
      )}
    </div>
  );
};

export default ItemList;

