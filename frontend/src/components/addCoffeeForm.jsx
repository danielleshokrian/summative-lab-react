import { useState } from "react";

export default function AddCoffeeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ name, description, origin, price: parseFloat(price) });
    setName(""); setDescription(""); setOrigin(""); setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input placeholder="Origin" value={origin} onChange={e => setOrigin(e.target.value)} required />
      <input placeholder="Price" type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} required />
      <button type="submit">Add Coffee</button>
    </form>
  );
}