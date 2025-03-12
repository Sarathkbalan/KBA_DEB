import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      ItemName: itemName,
      Category: category,
      Quantity: quantity,
      Price: price,
    };

    try {
      const response = await fetch("/api/additems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

      const data = await response.json();
      setMessage(data.msg);

      if (response.ok) {
        setTimeout(() => navigate("/items"));
      }
    } catch (error) {
      setMessage("Error adding item");
    }
  };

  return (
    <div className="mr-[300px] ml-[300px] mt-10 bg-green-200 shadow-lg border border-gray-500  rounded-lg pt-[10px]">
      <h2 className="text-2xl font-bold text-center text-gray-700">Add Item</h2>
      {message && <p className="mt-2 text-center text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Item Name"
          className="p-2 border border-gray-300 rounded-md"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="p-2 border border-gray-300 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Quantity"
          className="p-2 border border-gray-300 rounded-md"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          className="p-2 border border-gray-300 rounded-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;

